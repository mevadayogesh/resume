$(document).ready(() => {
    initializeResume();
    setupParallax();
    setupNavHighlighting();
    $("#current-year").text(new Date().getFullYear());
})

function initializeResume() {
    generatePersonalData(resumeData.personal);
    generateTimeline("#experience-container", resumeData.experience, true);
    generateTimeline("#education-container", resumeData.education, false);
    generateSkills();
    generateProjects();
}

function generatePersonalData(personalData) {
    $("#name").text(personalData.name);
    $("#title").text(personalData.title);
    $("#bio").text(personalData.bio);
    $("#email").text(personalData.email).attr("href", "mailto:" + personalData.email);
    $("#phone").text(personalData.phone);
    $("#location").text(personalData.location);
    $("#resume-download").attr("href", personalData.resumeUrl);

    const contactInfo = $("#contact-information");

    for (const [key, value] of Object.entries(resumeData.personal.social)) {
        const socialItem = `<li><i class="fab fa-${key}"></i> <a href="${value}" target="_blank">${key}</a></li>`;
        contactInfo.append(socialItem);
    }
    $("#footer-name").text(personalData.name);
}

function generateTimeline(containerId, items, isExperience) {
    const container = $(containerId);
    container.empty();

    items.forEach((item, index) => {
        const position = index % 2 === 0 ? "left" : "right";
        const title = isExperience ? item.title : item.degree;
        const subtitle = isExperience ? item.company : item.institution;

        const timelineItem = `
            <div class="timeline-item ${position}">
                <div class="timeline-content">
                    <div class="timeline-date">${item.startDate} - ${item.endDate}</div>
                    <h3 class="timeline-title">${title}</h3>
                    <h4 class="timeline-subtitle">${subtitle}, ${item.location}</h4>
                    <p>${item.description}</p>
                    <ul>
                        ${item.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;

        container.append(timelineItem);
    });
}

function generateSkills() {
    const container = $("#skills-container");
    container.empty();

    resumeData.skills.forEach((skill) => {
        const skillItem = `
            <div class="skill-item">
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-name">${skill.name}</div>
            </div>
        `;

        container.append(skillItem);
    })
}

function generateProjects() {
    const container = $("#projects-container");
    container.empty();

    resumeData.projects.forEach((project) => {
        const projectCard = `
            <div class="col-md-6 col-lg-6 mb-4">
                <div class="project-card">
                    <div class="project-img" style="background-image: url('${project.image}')"></div>
                    <div class="project-body">
                        <h3 class="project-title">${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                        </div>
                        <div class="project-links">
                            <a href="${project.companyWebsite}" target="_blank"><i class="fas fa-external-link-alt me-1"></i> Company Website</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.append(projectCard);
    })
}

function setupParallax() {
    $(window).scroll(() => {
        $(".parallax-bg").each(function () {
            const scrollPosition = $(window).scrollTop();
            const offset = $(this).offset().top;
            const distance = scrollPosition - offset;

            $(this).css("background-position", "50% " + 0.5 * distance + "px");
        });
    });
}

function setupNavHighlighting() {
    $(window).on("scroll", () => {
        const scrollPosition = $(window).scrollTop() + 100;
        const sections = $("section");
        let currentSection = "";

        sections.each(function () {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).height();

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = $(this).attr("id");
            }
        });
        $(".nav-link").removeClass("active");
        if (currentSection) {
            $(`.nav-link[href="#${currentSection}"]`).addClass("active");
        }
    })

    $(window).trigger("scroll");

    $(".nav-link").on("click", function (e) {
        e.preventDefault();

        const target = $(this).attr("href");

        $("html, body").animate({ scrollTop: $(target).offset().top, }, 800,);
    });
}

