document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulated user data with passwords (Replace with database lookup)
        const users = {
            "anita.kraus.13@student.hlg.edu": { password: "Pass123!", major: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/s/CS/EaflpdX8veBAiTTYVyyus2sBf4llkrhHdsf0oTZow_cuAg?e=EljTbZ" },
            "ignacio.diaz.11@student.hlg.edu": { password: "SecurePass1!", major: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/s/CS/EaflpdX8veBAiTTYVyyus2sBf4llkrhHdsf0oTZow_cuAg?e=EljTbZ" },
            "hayden.mckeon.10@student.hlg.edu": { password: "MyStrongP@ss", major: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/s/CS/EaflpdX8veBAiTTYVyyus2sBf4llkrhHdsf0oTZow_cuAg?e=EljTbZ" },
            "austin.ring.12@student.hlg.edu": { password: "Austin123!", major: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/s/CS/EaflpdX8veBAiTTYVyyus2sBf4llkrhHdsf0oTZow_cuAg?e=EljTbZ" },
            "logan.trupiano.10@student.hlg.edu": { password: "LoganSecure", major: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/s/CS/EaflpdX8veBAiTTYVyyus2sBf4llkrhHdsf0oTZow_cuAg?e=EljTbZ" },
            "brandon.white.12@student.hlg.edu": { password: "WhitePass", major: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/s/CS/EaflpdX8veBAiTTYVyyus2sBf4llkrhHdsf0oTZow_cuAg?e=EljTbZ" },
            "mtodd@hlg.edu": { password: "Professor123", role: "professor", department: "Computer Science", sharepoint: "https://hlgedu.sharepoint.com/sites/CS?market=en-US" },
            "art.example@student.hlg.edu": { password: "Artisthebest", role: "student", department: "Arts", sharepoint: "https://hlgedu.sharepoint.com/:u:/r/sites/Art/SitePages/TopicHome.aspx?csf=1&web=1&share=Eef7Ly1FAHNKp3fIcxz6UDABnqYiPsgbbT10dtruje45ZA&e=zhf5Uf" },
            "science.example@student.hlg.edu": { password: "321SCIENCE", role: "student", department: "Natural Science", sharepoint: "https://hlgedu.sharepoint.com/:u:/r/sites/NS/SitePages/TopicHome.aspx?csf=1&web=1&share=EeLABLHCDpdPk7MJMIBufu0B3ufOlssfjGjA9cNiOSnp0g&e=7FGPNE" }

        };

        // Check if username exists
        if (users[username]) {
            if (users[username].password === password) {
                // Redirect to SharePoint
                window.location.href = users[username].sharepoint;
            } else {
                alert("Incorrect password. Please try again.");
            }
        } else {
            alert("Invalid username. Please try again.");
        }
    });
});

