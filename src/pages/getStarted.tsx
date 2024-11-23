import React from "react";
import Header from "../components/header";

const GetStarted: React.FC = () => {
	return (
		<>
			<Header />
			<style>{`
        body {
          overflow: hidden;
        }
      `}</style>
			<main className="bg-gray-100 text-gray-900 min-h-screen">
				<section className="bg-purple-800 text-white py-16">
					<div className="container mx-auto text-center space-y-6">
						<h1 className="text-4xl font-bold">
							Start Your Learning Journey with{" "}
							<span className="text-green-400">Code Breakers</span>
						</h1>
						<p className="text-lg">
							Follow a structured roadmap to master coding and achieve your goals step by step.
						</p>
					</div>
				</section>

				<section id="steps" className="py-12">
					<div className="container mx-auto space-y-8">
						<h2 className="text-3xl font-bold text-center text-purple-800">
							How to Get Started
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4 border-t-4 border-green-400">
								<div className="text-green-400 text-4xl font-bold">1</div>
								<h3 className="text-xl font-semibold text-purple-800">
									Choose Your Path
								</h3>
								<p>
									Select a learning roadmap, such as web development, data structures, or
									machine learning.
								</p>
								<a
									href="/roadmap"
									className="text-green-400 font-medium hover:underline"
								>
									Explore Roadmaps
								</a>
							</div>

							<div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4 border-t-4 border-green-400">
								<div className="text-green-400 text-4xl font-bold">2</div>
								<h3 className="text-xl font-semibold text-purple-800">
									Track Your Progress
								</h3>
								<p>
									Mark completed tasks and milestones as you learn, and monitor your growth.
								</p>
								<a
									href="#"
									className="text-green-400 font-medium hover:underline"
								>
								</a>
							</div>

							<div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4 border-t-4 border-green-400">
								<div className="text-green-400 text-4xl font-bold">3</div>
								<h3 className="text-xl font-semibold text-purple-800">
									Join the Community
								</h3>
								<p>
									Connect with other learners, share your progress, and stay motivated.
								</p>
								<a
									href="https://discord.gg/QysVX2Vn"
									className="text-green-400 font-medium hover:underline"
								>
									Get Connected
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-purple-800 text-white py-16">
					<div className="container mx-auto text-center space-y-6">
						<h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
						<p className="text-lg">
							Begin your journey today and unlock your potential as a developer.
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default GetStarted;

