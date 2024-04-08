document.addEventListener("DOMContentLoaded", function() {
    // Getting the personal details
    var myname = sessionStorage.getItem('name');
    var myemail = sessionStorage.getItem('email');
    var myphone = sessionStorage.getItem('phone');
    var mylinkedin = sessionStorage.getItem('linkedinurl');
    var mygithub = sessionStorage.getItem('githublink');

    document.getElementById('myname').textContent = myname;
    document.getElementById('myemail').textContent = myemail;
    document.getElementById('myphone').textContent = myphone;
    document.getElementById('linkedinurl').setAttribute('href', mylinkedin);
    document.getElementById('githuburl').setAttribute('href', mygithub);

    // Getting the education details
    var educationDetails = JSON.parse(sessionStorage.getItem('educationDetails'));
    console.log(educationDetails);
    if (Array.isArray(educationDetails) && educationDetails.length > 0) {
        // Get the <ul> element where the list will be displayed
        var listContainer = document.getElementById('eduinfo');

        // Iterate over each education detail and create <li> elements
        educationDetails.forEach(function(detail) {
            var listItem = document.createElement('li');
            var listItem = document.createElement('li');
        var text = "Completed ";

        // Check if each field exists, if not, print a placeholder text
        if (detail.degree) {
            text += detail.degree + " ";
        } else {
            text += " ";
        }

        if (detail.course) {
            text += "with specialization in " + detail.course + " ";
        } else {
            text += " ";
        }

        if (detail.institute) {
            text += 'from ' + detail.institute + ' ';
        } else {
            text += '';
        }

        if (detail.startDate && detail.endDate) {
            text += 'from ' + detail.startDate + ' to ' + detail.endDate + ' ';
        } else {
            text += ' ';
        }

        if (detail.score) {
            text += 'with a score of ' + detail.score;
        } else {
            text += '';
        }

        listItem.textContent = text;
        listContainer.appendChild(listItem);
        });
    } else {
        document.getElementById('eduinfo').textContent = 'No education details available';
    }

    // Getting certification details
    var certificationDetails = JSON.parse(sessionStorage.getItem('certificationDetails'));
    console.log(certificationDetails);
    if (Array.isArray(certificationDetails) && certificationDetails.length > 0) {
        // Get the <ul> element where the list will be displayed
        var listContainer = document.getElementById('certficateinfo');

        // Iterate over each certification detail and create <li> elements
        certificationDetails.forEach(function(cert) {
            var listItem = document.createElement('li');
            listItem.textContent = "Earned a certificate in " + cert.certification + ' from ' + cert.organization;
            listContainer.appendChild(listItem);
        });
    } else {
        document.getElementById('certificateinfo').textContent = 'No certification details available';
    }

    // Getting skills details
    var skillDetails = JSON.parse(sessionStorage.getItem('skillDetails'));
    console.log(skillDetails);
    if (Array.isArray(skillDetails) && skillDetails.length > 0) {
        // Get the <ul> element where the list will be displayed
        var listContainer = document.getElementById('skills');

        // Iterate over each skill detail and create <li> elements
        skillDetails.forEach(function(skill) {
            var listItem = document.createElement('li');
            listItem.textContent = skill.skill;
            listContainer.appendChild(listItem);
        });
    } else {
        document.getElementById('skillsinfo').textContent = 'No skills details available';
    }

    // Getting project details
    var projectDetails = JSON.parse(sessionStorage.getItem('projectDetails'));
    console.log(projectDetails);
    if (Array.isArray(projectDetails) && projectDetails.length > 0) {
        // Get the container element where the projects will be displayed
        var projectsContainer = document.getElementById('proinfo');

        // Iterate over each project detail and create <dl> elements
        projectDetails.forEach(function(project) {
            var title = document.createElement('li');
            title.textContent = project.title;
            title.style.fontWeight = 'bold'; // Set title in bold

            var projectDescription = document.createElement('dd');
            projectDescription.textContent = project.project;

            var definitionList = document.createElement('dl');
            definitionList.appendChild(title);
            definitionList.appendChild(projectDescription);

            // Append the definition list to the projects container
            projectsContainer.appendChild(definitionList);
        });
    } else {
        // If no projects available, display a message
        document.getElementById('projectsinfo').textContent = 'No projects available';
    }

    // Getting strengths details
    var strengthDetails = JSON.parse(sessionStorage.getItem('strengthDetails'));
    console.log(strengthDetails);
    if (Array.isArray(strengthDetails) && strengthDetails.length > 0) {
        // Get the <ul> element where the list will be displayed
        var listContainer = document.getElementById('strengthinfo');

        // Iterate over each strength detail and create <li> elements
        strengthDetails.forEach(function(strength) {
            var listItem = document.createElement('li');
            listItem.textContent = strength.strength;
            listContainer.appendChild(listItem);
        });
    } else {
        document.getElementById('strengthsinfo').textContent = 'No strengths details available';
    }

    // Getting hobbies details
    var hobbiesDetails = JSON.parse(sessionStorage.getItem('hobbiesDetails'));
    console.log(hobbiesDetails);
    if (Array.isArray(hobbiesDetails) && hobbiesDetails.length > 0) {
        // Get the <ul> element where the list will be displayed
        var listContainer = document.getElementById('hobbiesinfo');

        // Iterate over each hobby detail and create <li> elements
        hobbiesDetails.forEach(function(hobby) {
            var listItem = document.createElement('li');
            listItem.textContent = hobby.hobby;
            listContainer.appendChild(listItem);
        });
    } else {
        document.getElementById('hobbiesinfo').textContent = 'No hobbies details available';
    }


});
