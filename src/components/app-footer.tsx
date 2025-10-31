import Button from "./button";
import LogoFlexible from "./icons/logo-flexible";

function AppFooter() {
  return (
    <footer className="p-4 pt-2 md:p-8 lg:p-10 lg:pt-4 bg-surface-container-lowest text-on-surface">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <a href="#" className="p-5">
            <LogoFlexible
              className="text-on-background"
              size={48}
              aria-label="PHP"
            />
          </a>
        </div>
        <p className="mb-3 text-on-surface/50">
          Fast, flexible and pragmatic, PHP powers everything from your blog to
          the most popular websites in the world.
        </p>
        <div className="flex pb-2 px-1 justify-center items-center gap-3">
          <Button
            variant="light"
            color="surface"
            href="https://www.linkedin.com/company/phpnet"
            target="_blank"
            className="px-2"
          >
            <svg
              width={22}
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256"
            >
              <path
                fill="#0A66C2"
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
              />
            </svg>
          </Button>
          <Button
            variant="light"
            color="surface"
            href="https://x.com/official_php"
            target="_blank"
            className="px-2"
          >
            <svg
              width={22}
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 1200 1227"
            >
              <path
                fill="currentColor"
                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              />
            </svg>
          </Button>
          <Button
            variant="light"
            color="surface"
            href="https://phpc.social/@php"
            target="_blank"
            className="px-2"
          >
            <svg width={22} preserveAspectRatio="xMidYMid" viewBox="0 0 61 65">
              <defs>
                <linearGradient
                  id="mastodon__a"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6364FF" />
                  <stop offset="100%" stopColor="#563ACC" />
                </linearGradient>
              </defs>
              <path
                fill="url(#mastodon__a)"
                d="M60.754 14.39C59.814 7.406 53.727 1.903 46.512.836 45.294.656 40.682 0 29.997 0h-.08C19.23 0 16.938.656 15.72.836 8.705 1.873 2.299 6.82.745 13.886c-.748 3.48-.828 7.338-.689 10.877.198 5.075.237 10.142.697 15.197a71.482 71.482 0 0 0 1.664 9.968c1.477 6.056 7.458 11.096 13.317 13.152a35.718 35.718 0 0 0 19.484 1.028 28.365 28.365 0 0 0 2.107-.576c1.572-.5 3.413-1.057 4.766-2.038a.154.154 0 0 0 .062-.118v-4.899a.146.146 0 0 0-.055-.111.145.145 0 0 0-.122-.028 54 54 0 0 1-12.644 1.478c-7.328 0-9.298-3.478-9.863-4.925a15.258 15.258 0 0 1-.857-3.882.142.142 0 0 1 .178-.145 52.976 52.976 0 0 0 12.437 1.477c1.007 0 2.012 0 3.02-.026 4.213-.119 8.654-.334 12.8-1.144.103-.02.206-.038.295-.065 6.539-1.255 12.762-5.196 13.394-15.176.024-.393.083-4.115.083-4.523.003-1.386.446-9.829-.065-15.017Z"
              />
              <path
                fill="#fff"
                d="M50.394 22.237v17.35H43.52V22.749c0-3.545-1.478-5.353-4.483-5.353-3.303 0-4.958 2.139-4.958 6.364v9.217h-6.835V23.76c0-4.225-1.657-6.364-4.96-6.364-2.988 0-4.48 1.808-4.48 5.353v16.84H10.93V22.237c0-3.545.905-6.362 2.715-8.45 1.868-2.082 4.317-3.152 7.358-3.152 3.519 0 6.178 1.354 7.951 4.057l1.711 2.871 1.714-2.871c1.773-2.704 4.432-4.056 7.945-4.056 3.038 0 5.487 1.069 7.36 3.152 1.81 2.085 2.712 4.902 2.71 8.449Z"
              />
            </svg>
          </Button>
        </div>
        <ul className="flex flex-wrap justify-center items-center mb-6">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              My PHP.net
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Other PHP.net sites
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy policy
            </a>
          </li>
        </ul>
        <span className="text-sm sm:text-center text-on-surface/50">
          <a href="#" className="hover:underline">
            Copyright © 2001-2025 The PHP Group
          </a>
        </span>
      </div>
    </footer>
  );
}

export default AppFooter;
