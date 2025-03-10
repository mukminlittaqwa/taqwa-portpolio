function AppFooterCopyright() {
	return (
	  <div className="flex justify-center items-center text-center py-6">
		 <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} • Built with{" "}
			<span className="text-indigo-500 font-semibold">React & Tailwind CSS</span>
			{" • "}
			<a
			  href="https://github.com/mukminlittaqwa"
			  target="_blank"
			  rel="noopener noreferrer"
			  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition-all duration-300"
			>
			  Mukmin Littaqwa
			</a>
		 </p>
	  </div>
	);
 }
 
 export default AppFooterCopyright;
 