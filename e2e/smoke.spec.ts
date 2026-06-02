import { expect, test } from "@playwright/test";

const corePages = [
  "/hakkimizda",
  "/uretim-tasarim",
  "/koleksiyonlar",
  "/toptan-satis",
  "/kalite",
  "/fabrika",
  "/showroom",
  "/galeri",
  "/sss",
  "/kvkk",
  "/gizlilik",
  "/cerez-politikasi",
];

test("ana sayfa yüklenir ve başlık/H1 doğru", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Tripen Tekstil/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("tüm temel sayfalar açılır ve birer H1 içerir", async ({ page }) => {
  for (const path of corePages) {
    const res = await page.goto(path);
    expect(res?.status(), `${path} durum kodu`).toBeLessThan(400);
    await expect(page.getByRole("heading", { level: 1 }), `${path} H1`).toBeVisible();
  }
});

test("telefon ve WhatsApp bağlantıları mevcut", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('a[href="tel:+905363506454"]').first()).toBeAttached();
  await expect(page.locator('a[href*="wa.me/905363506454"]').first()).toBeAttached();
});

test("iletişim: form alanları ve harita iframe görünür", async ({ page }) => {
  await page.goto("/iletisim");
  const form = page.locator("form");
  await expect(form.getByLabel("Ad Soyad")).toBeVisible();
  await expect(form.getByLabel("Telefon")).toBeVisible();
  await expect(form.getByLabel("Mesaj")).toBeVisible();
  await expect(page.locator('iframe[title*="Google Haritalar"]').first()).toBeAttached();
});

test("iletişim formu boş gönderimde doğrulama hatası verir", async ({ page }) => {
  await page.goto("/iletisim");
  await page.getByRole("button", { name: /WhatsApp ile gönder/ }).click();
  await expect(page.getByText("Lütfen adınızı girin.")).toBeVisible();
});

test("bilinmeyen rota 404 döner", async ({ page }) => {
  const res = await page.goto("/boyle-bir-sayfa-yok");
  expect(res?.status()).toBe(404);
  await expect(page.getByText("Sayfa bulunamadı")).toBeVisible();
});

test("masaüstü: header navigasyonu çalışır", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Yalnızca masaüstü");
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Ana menü" })
    .getByRole("link", { name: "Hakkımızda" })
    .click();
  await expect(page).toHaveURL(/\/hakkimizda$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("mobil: çekmece menü açılır ve gezinilir", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Yalnızca mobil");
  await page.goto("/");
  await page.getByRole("button", { name: "Menüyü aç" }).click();
  const dialog = page.getByRole("dialog", { name: "Site menüsü" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("link", { name: "İletişim" }).click();
  await expect(page).toHaveURL(/\/iletisim$/);
});
