import React, { useEffect } from "react";
import Header from "../components/Header.tsx";

const GetStarted: React.FC = () => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<>
			<Header />
			<main className="relative bg-gray-100 text-gray-900 w-screen h-screen overflow-hidden">
				<section className="absolute top-0 left-0 w-full h-1/4 bg-purple-800 text-white flex flex-col justify-center items-center mt-8"> {/* Added mt-8 here */}
					<div className="text-center space-y-4">
						<h1 className="text-4xl font-bold">
							Start Your Learning Journey with{" "}
							<span className="text-green-400">Borderless Coding Roadmap</span>
						</h1>
						<p className="text-lg">
							Follow a structured roadmap to master coding and achieve your goals step by step.
						</p>
					</div>
				</section>

				<section className="absolute top-1/4 w-full h-1/2 flex justify-around items-center">
					<div className="bg-white rounded-lg shadow-md text-center p-6 border-t-4 border-green-400 w-1/4 h-1/1">
						<div className="text-green-400 text-4xl font-bold">1</div>
						<h3 className="text-xl font-semibold text-purple-800">Choose Your Path</h3>
						<p className="mt-2">
							Select a learning roadmap, such as web development, data structures, or machine learning.
						</p>
						<a
							href="/roadmap"
							className="text-green-400 font-medium hover:underline mt-4 inline-block"
						>
							Explore Roadmaps
						</a>
					</div>

					<div className="bg-white rounded-lg shadow-md text-center p-6 border-t-4 border-green-400 w-1/4 h-1/1">
						<div className="text-green-400 text-4xl font-bold">2</div>
						<h3 className="text-xl font-semibold text-purple-800">Track Your Progress</h3>
						<p className="mt-2">
							Mark completed tasks and milestones as you learn, and monitor your growth.
						</p>
					</div>

					<div className="bg-white rounded-lg shadow-md text-center p-6 border-t-4 border-green-400 w-1/4 h-1/1">
						<div className="text-green-400 text-4xl font-bold">3</div>
						<h3 className="text-xl font-semibold text-purple-800">Join the Community</h3>
						<p className="mt-2">
							Connect with other learners, share your progress, and stay motivated.
						</p>
						<a
							href="https://www.borderlesscoding.com/"
							className="text-green-400 font-medium hover:underline mt-4 inline-block"
						>
							Get Connected
						</a>
					</div>
				</section>

				<section className="absolute bottom-0 left-0 w-full h-1/4 bg-purple-800 text-white flex flex-col justify-center items-center">
					<div className="text-center">
						<h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
						<p className="text-lg mt-2">
							Begin your journey today and unlock your potential as a developer.
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default GetStarted;

