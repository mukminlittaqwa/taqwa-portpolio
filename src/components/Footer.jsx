import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
 } from "react-icons/fi";
 import { SiGitlab } from "react-icons/si";
 import AppFooterCopyright from "./AppFooterCopyright";
 
 const socialLinks = [
	{
	  id: 1,
	  icon: <FiGlobe />,
	  url: "https://github.com/mukminlittaqwa",
	},
	{
	  id: 2,
	  icon: <FiGithub />,
	  url: "https://github.com/mukminlittaqwa",
	},
	{
	  id: 3,
	  icon: <SiGitlab className="text-orange-500" />, // GitLab dengan warna khas
	  url: "https://gitlab.com/mukminlittaqwa17",
	},
	{
	  id: 4,
	  icon: <FiTwitter />,
	  url: "https://x.com/mochacat6",
	},
	{
	  id: 5,
	  icon: <FiLinkedin />,
	  url: "www.linkedin.com/in/mukminlittaqwa",
	},
 ];
 
 const AppFooter = () => {
	return (
	  <div className="container mx-auto">
		 <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			{/* Footer social links */}
			<div className="flex flex-col items-center mb-12 sm:mb-28">
			  <p className="text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
				 Follow Me
			  </p>
			  <ul className="flex gap-4 sm:gap-6">
				 {socialLinks.map((link) => (
					<a
					  href={link.url}
					  target="__blank"
					  key={link.id}
					  className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-full bg-gray-50 dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-neutral-700 shadow-md p-3 sm:p-4 transition-all duration-300"
					>
					  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
					</a>
				 ))}
			  </ul>
			</div>
 
			<AppFooterCopyright />
		 </div>
	  </div>
	);
 };
 
 export default AppFooter;
 