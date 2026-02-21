import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const user = process.env.SILT_BASIC_USER;
  const pass = process.env.SILT_BASIC_PASS;

  // If you haven't set env vars yet, do NOT lock you out locally.
  // (On production, make sure these are set.)
  if (!user || !pass) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  const auth = req.headers.get("authorization");

  if (auth?.startsWith("Basic ")) {
    try {
      const base64 = auth.slice("Basic ".length).trim();
      const decoded = atob(base64);
      const [u, p] = decoded.split(":");

      if (u === user && p === pass) {
        const res = NextResponse.next();
        res.headers.set("X-Robots-Tag", "noindex, nofollow");
        return res;
      }
    } catch {
      // fall through to challenge
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="SILT Private Draft", charset="UTF-8"',
    },
  });
}

export const config = {
  // Protect everything (pages + assets).
  matcher: ["/:path*"],
};
