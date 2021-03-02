import React from 'react';
import Project from "../../../components/Header/Project/Project"
import WavelengthJPG from "../../../assets/Wavelength.jpg"
import SelectEquipment from "../../../assets/selectEquipment.png"

const Portfolio = () => {
    return (
        <div>
			<h2 className="text-center m-3">Portfolio</h2>

            <div className="row m-3">
				<div className="col-4">
					<Project
						title="Wavelength"
						desc="Have you been looking for a way to find new music, give your own rating, and post songs that you feel like people have to hear? Then search no further! Our app gives users a fun way of sharing their new discoveries with the public. Like the artist? Then feel free to go take a look at some of their hits on our page!"
						repoName="Wavelength"
						repo="https://github.com/Pkeld148/wavelength"
						site="https://evening-headland-02577.herokuapp.com/"
					/>
				</div>
				<div className="col-4">
					<Project
						title="Food Service Log Manager"
						desc="The Food Service Log Manager seeks to cut down on the amount of paperwork required for food service establishments and simplify the process of taking, storing, and indexing temperature logs.

                        With the Food Service Log Manager, users will be record the temperature of equipment and log the results to timestamped log which is sent to an email address to be indexed and saved via the inbox."
						repoName="food-service-log-manager"
						repo="https://github.com/Pkeld148/food-service-log-manager"
						site="https://andrediop.github.io/Collaborative-project/"
					/>
				</div>
			</div>
            <div className="row m-3">
				<div className="col-4">
					<Project
						title="Javascript Password Generator"
						desc="The goal of this project was to create a webpage that generates a randomized password using supplied index and CSS files. The page relies on Javascript to execute a number of different functions to generate a password customized to the parameters of what the user chooses."
						repoName="javascript-password-generator"
						repo="https://github.com/Pkeld148/javascript-password-generator"
						site="https://pkeld148.github.io/javascript-password-generator/"
					/>
				</div>
				<div className="col-4">
					<Project
						title="Work Day Scheduler"
						desc="The goal of this project was to create a webpage that functions as personal planner. The user can edit in notes for the different work hours and they will persist even through reloading the page. This project utilizes javascript and the Moment API to provide a dynamic color display according to the user's current time."
						repoName="work-day-scheduler"
						repo="https://github.com/Pkeld148/work-day-scheduler"
						site="https://pkeld148.github.io/work-day-scheduler/"
					/>
				</div>
			</div>            <div className="row m-3">
				<div className="col-4">
					<Project
						title="Employee Tracker - mySQL"
						desc="The goal of this app was to allow a user to be able to keep track of employees and their corresponding information through a command line interface. This app utilizes a mySQL database to store information, and Inquirer to navigate the app within the command line."
						repoName="employee-tracker-mysql"
						repo="https://github.com/Pkeld148/employee-tracker-mysql"
					/>
				</div>
				<div className="col-4">
					<Project
						title="Budget Tracker"
						desc="The goal of this project was to create a progressive web app that allows the user to keep track of their budget. The user can add or subtract from their budget easily with buttons, and can see transactions visually with a chart."
						repoName="budget-tracker-pwa"
						repo="https://github.com/Pkeld148/budget-tracker-pwa"
						site="https://fierce-mesa-48969.herokuapp.com/"
					/>
				</div>
			</div>

        </div>
    );
};

export default Portfolio;