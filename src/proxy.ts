import { NextResponse, type NextRequest } from "next/server";

const canonicalHost = "tripen.com.tr";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host === `www.${canonicalHost}` || host?.endsWith(".vercel.app")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = canonicalHost;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
