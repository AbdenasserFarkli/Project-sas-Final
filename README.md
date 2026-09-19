# Project-sas-Final

#  Introduction

Before explaining the different steps of the project, I would like to briefly introduce its idea.

This project is a console-based application designed for students studying at YouCode. Its main purpose is to provide a simple student management and progress-tracking system.

The application allows teachers to track students' progress, including completed exercises, completed challenges, evaluations, and other important information. It also provides several features that make it easier for teachers to monitor and manage their students' learning progress.

 # Step 1 — Understanding the Project
 The project was very complicated for me, and my first challenge was to understand the project, understand its logic, and how it works. This was the most difficult challenge.

This step itself was divided into several steps.

At the beginning, I asked my classmates. They explained the idea to me, which helped me understand it a little better, but it was not enough.

After that, I turned to an AI tool. I uploaded the project file and asked it to explain only the idea. I did not ask it to give me the code. Honestly, this helped me a lot. It only gave me the idea and the steps to complete the project.

Here, I think I finished the first stage, which was understanding the project.

The second stage was going to be the beginning of the implementation

## Step 2

Now, I started the second step, where I decided to create the project structure. I had to think about which functions I was going to use and what each function was supposed to do.

I also had to make sure that each function had only one responsibility, but at the same time, I could use it in several places.

This was one of the difficult parts of the project, and I think it was even harder than writing the code itself.

What made it more difficult was that this was my first project, which means that I lacked experience. That is why I turned to a friend. We tried to share the experience we had gained during the SAS period to build an idea for the project.

Honestly, AI also had a role in giving us ideas and helping us develop our own ideas.
## Step 3

Here, we reached the third step, where I started building the program.

I decided to build it using functions, where each function has one specific role. This makes the code easier to read, more organized, and easier to modify.

I also decided to organize the code into files in the same way that our instructor showed us in the project structure.
## Step 4

For the fourth step, I will briefly talk about each function in the code.

* **normaliserNom**: cleans the name and removes anything that is not an alphabetic character, then returns the name as required.

* **validerResultat**: checks and returns a valid day and the number of exercises completed per day, based on the data that I provide.

* **checkid**: checks if an ID already exists. It is not used to search for an ID as it may seem from its name. It has another purpose and is used by another function.

* **ajouterApprenant**: adds a student to the list of students. Here, we use the `checkid` function to check if the ID has already been registered.

* **findIndexById**: searches for a person's position in the list using their ID and returns their position in the list.

* **misajourRusult**: checks whether a specific day already exists. If it exists, it returns the position of that day.

* **enregistrerResultat**: adds a new day's result or updates the day if it already exists.

* **FindByName**: searches for a person by their name or by a letter.

* **serchebyId**: searches for a person using their ID.

* **calculerProgression**: calculates the student's progress percentage.

* **filtrerParNiveau**: divides the students into three levels and displays the level of each student.

* **trierParProgression**: displays the students sorted from highest to lowest according to their progress.

* **trierParalphabétique**: displays the students in alphabetical order.
## Step 5

For the fifth step, which is the last step, I created a menu to display these functions in the way required in the exercise.

During this stage, I faced several bugs, which I managed to solve.
## Conclusion

In the end, I am proud of myself and of the level I have reached and the progress I have made.

Whether I am chosen to continue my studies here or not, I will be happy because I know that I did my best.



