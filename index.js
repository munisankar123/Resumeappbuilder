document.getElementById('addeducation').addEventListener('click', function() {
    var educationFields = document.getElementById('education_fields');
    var newEducationField = document.createElement('div');
    newEducationField.className = 'education_1';
    newEducationField.innerHTML = `
        <label>Degree</label>
        <input type="text" name="degree" placeholder="Degree" required>
        <label>Course</label>
        <input type="text" name="course" placeholder="Course" required>
        <label for="Fromdate">From:</label>
        <input type="number" name="Start_date" placeholder="YYYY" min="1900" max="2099" step="1" required>
        <label for="Todate">To:</label>
        <input type="number" name="End_date" placeholder="YYYY" min="1900" max="2099" step="1" required>
        <label for="score">Score:</label>
        <input type="text" name="score" placeholder="Score" required>
        <label for="Institute">Institute:</label>
        <input type="text" name="institute" placeholder="Institute" required>`;
    educationFields.appendChild(newEducationField);
});
document.getElementById('addskills').addEventListener('click', function() {
    var skills = document.getElementById('skills');
    var newSkill = document.createElement('div');
    newSkill.className = 'skills_1';
    newSkill.innerHTML = `
        <input type="text" name="skill" placeholder="Skill" required>`;
    skills.appendChild(newSkill);
});

document.getElementById('addcertification').addEventListener('click', function() {
    var certifications = document.getElementById('certifications');
    var newCertification = document.createElement('div');
    newCertification.className = 'certification_1';
    newCertification.innerHTML = `
        <input type="text" name="certification" placeholder="Certification" required>
        <input type="text" name="Organization" placeholder="Provided Organization" required>`;
    certifications.appendChild(newCertification);
});

document.getElementById('addprojects').addEventListener('click', function() {
    var projects = document.getElementById('projects');
    var newProject = document.createElement('div');
    newProject.className = 'projects_1';
    newProject.innerHTML = `
        <input type="text" name="title" placeholder="Project" required>
        <input type="text" name="project" placeholder="Project" required>`;
    projects.appendChild(newProject);
});

document.getElementById('addstrengths').addEventListener('click', function() {
    var strengths = document.getElementById('Strengths');
    var newStrength = document.createElement('div');
    newStrength.className = 'Strength_1';
    newStrength.innerHTML = `
        <input type="text" name="strongs" placeholder="Enter your strength here">`;
    strengths.appendChild(newStrength);
});

document.getElementById('addhobbies').addEventListener('click', function() {
    var hobbies = document.getElementById('hobbies');
    var newHobby = document.createElement('div');
    newHobby.className = 'hobbies_';
    newHobby.innerHTML = `
        <input type="text" name="hobby" placeholder="Enter your hobbies here">`;
    hobbies.appendChild(newHobby);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();

        var usname = document.getElementById("name").value;
        var email = document.getElementById("email").value; // Assuming you have an input field with id="email"
        var phone = document.getElementById("phone").value; // Assuming you have an input field with id="phone"
        var linkedin = document.getElementById("linkedin").value; // Assuming you have an input field with id="linkedin"
        var github = document.getElementById("github").value; // Assuming you have an input field with id="github"

        var educationFields = document.querySelectorAll('div#education_fields div[class^="education_"]');
        var educationDetails = [];
        educationFields.forEach(function(field) {
            var degree = field.querySelector('input[name="degree"]').value;
            var course = field.querySelector('input[name="course"]').value;
            var startDate = field.querySelector('input[name="Start_date"]').value;
            var endDate = field.querySelector('input[name="End_date"]').value;
            var score = field.querySelector('input[name="score"]').value;
            var institute = field.querySelector('input[name="institute"]').value;
            educationDetails.push({
                degree: degree,
                course: course,
                startDate: startDate,
                endDate: endDate,
                score: score,
                institute: institute
            });
        });

        var skillFields = document.querySelectorAll('div#skills div[class^="skills_"]');
        var skillDetails = [];
        skillFields.forEach(function(field) {
            var skill = field.querySelector('input[name="skill"]').value;
            skillDetails.push({
                skill: skill
            });
        });

        var certificationFields = document.querySelectorAll('div#certifications div[class^="certification_"]');
        var certificationDetails = [];
        certificationFields.forEach(function(field) {
            var certification = field.querySelector('input[name="certification"]').value;
            var organization = field.querySelector('input[name="Organization"]').value;
            certificationDetails.push({
                certification: certification,
                organization: organization
            });
        });

        var projectFields = document.querySelectorAll('div#projects div[class^="projects_"]');
        var projectDetails = [];
        projectFields.forEach(function(field) {
            var title = field.querySelector('input[name="title"]').value;
            var project = field.querySelector('input[name="project"]').value;
            projectDetails.push({
                title: title,
                project: project
            });
        });

        var strengthFields = document.querySelectorAll('div#Strengths div[class^="Strength_"]');
        var strengthDetails = [];
        strengthFields.forEach(function(field) {
            var strength = field.querySelector('input[name="strongs"]').value;
            strengthDetails.push({
                strength: strength
            });
        });

        var hobbyFields = document.querySelectorAll('div#hobbies div[class^="hobbies_"]');
        var hobbiesDetails = [];
        hobbyFields.forEach(function(field) {
            var hobby = field.querySelector('input[name="hobby"]').value;
            hobbiesDetails.push({
                hobby: hobby
            });
        });


        // Similar processing for skillDetails, certificationDetails, projectDetails, strengthDetails, and hobbiesDetails

        // Storing data in sessionStorage
        window.location.href = 'Resume.html';
        sessionStorage.setItem('name', usname);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('linkedinurl', linkedin);
        sessionStorage.setItem('githublink', github);
        sessionStorage.setItem('educationDetails', JSON.stringify(educationDetails));
        sessionStorage.setItem('skillDetails', JSON.stringify(skillDetails));
        sessionStorage.setItem('certificationDetails', JSON.stringify(certificationDetails));
        sessionStorage.setItem('projectDetails', JSON.stringify(projectDetails));
        sessionStorage.setItem('strengthDetails', JSON.stringify(strengthDetails));
        sessionStorage.setItem('hobbiesDetails', JSON.stringify(hobbiesDetails));
        console.log(certificationDetails);
        console.log(skillDetails);
        console.log(projectDetails);
        console.log(strengthDetails);
        console.log(hobbiesDetails);

        // Similarly store other details in sessionStorage
        console.log(educationDetails);
        // Displaying the name in the console
        console.log(usname);
    });
});
