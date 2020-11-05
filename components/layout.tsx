import React from "https://esm.sh/react";
import { Link } from "https://deno.land/x/aleph/mod.ts";

const name = "Andrew Bell";
export const siteTitle = "Kass and Andrew";

export default function Layout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/blog/recent">Recent Post</Link>
        </li>
      </ul>
      <main className="cell auto background">
        <div className="content">
          {children}
        </div>
      </main>;
    </>
  );
}
/*
export default function Layout({ children, location }) {
	const router = useRouter();
	const [toss, folder, path] = router.pathname.split("/", 3);
	let Navi = ( //default navbar (home)
		<>
			<Link href="/">
				<a style={{padding:0}}>
					<img
						src="/images/logo.svg"
						className={`${styles.AppLogo2} ${utilStyles.borderCircle}`}
						alt={name}
					/>
				</a>
			</Link>
		</>
	);
	if (folder === "Portfolio" || folder === "CSUMBPortfolio") { //portfolio navbar
		Navi = (
			<>
				<li><Link href="/Portfolio">
					<a className={styles.NavLink}>Home</a>
				</Link></li>
				<li><Link href="/CSUMBPortfolio/CST499">
					<a className={styles.NavLink}>Capstone Class</a>
				</Link></li>
				<li><Link href="/Portfolio/Resume">
					<a className={styles.NavLink}>Resume</a>
				</Link></li>
			</>
		);
	} else if (folder === "Japan Trip") { //gallery navbar
	}
	return (
		<div className="grid-y medium-grid-frame">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="Andrew Bell"
					content="Andrew Bell's portfolio website"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={location || siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{location || siteTitle}</title>
			</Head>
			<div className="cell shrink">
				<header className={styles.AppHeader}>
					<ul className="menu align-center">
						<li>
							<Link href="/">
								<a style={{padding:0}}>
									<img
										src="/images/logo.svg"
										className={`${styles.AppLogo} ${utilStyles.borderCircle}`}
										alt={name}
									/>
								</a>
							</Link>
						</li>
						<li><h2 className={styles.AppTitle}>{location || siteTitle}</h2></li>
						{Navi}
					</ul>
				</header>
			</div>

			<main className="cell auto background">
				<div className="content">
				{children}
				</div>
			</main>
		</div>
	)
}
*/