// Add or update your custom worksheet paths here:
const worksheetDetails = {
    // Juniors Worksheets
    "101": "worksheets/ws101.html",
    "102": "worksheets/ws102.html",
    "103": "worksheets/ws103.html",
    "104": "worksheets/ws104.html",
    "105": "worksheets/ws105.html",
    "106-1": "worksheets/ws106-1.html",
    "106-2": "worksheets/ws106-2.html",
    "107-1": "worksheets/ws107-1.html",
    "108-1": "worksheets/ws108-1.html",
    "109-1": "worksheets/ws109-1.html",
    "110-1": "worksheets/ws110-1.html",
    "111-1": "worksheets/ws111-1.html",
    "112-1": "worksheets/ws112-1.html",
    "113-1": "worksheets/ws113-1.html",
    "114-1": "worksheets/ws114-1.html",
    "115-1": "worksheets/ws115-1.html",
    "116": "worksheets/ws116.html",
    "117-1": "worksheets/ws117-1.html",
    "119-1": "worksheets/ws119-1.html",
    "120-1": "worksheets/ws120-1.html",

    // Wheelers Worksheets
    "201": "worksheets/ws201.html",
    "202": "worksheets/ws202.html",
    "203": "worksheets/ws203.html",
    "204": "worksheets/ws204.html",
    "205": "worksheets/ws205.html",
    "206-1": "worksheets/ws206-1.html",
    "207-1": "worksheets/ws207-1.html",
    "208-1": "worksheets/ws208-1.html",
    "209-1": "worksheets/ws209-1.html",
    "210-1": "worksheets/ws210-1.html",
    "211-1": "worksheets/ws211-1.html",
    "212-1": "worksheets/ws212-1.html",
    "213-1": "worksheets/ws213-1.html",
    "214-1": "worksheets/ws214-1.html",
    "215-1": "worksheets/ws215-1.html",
    "216": "worksheets/ws216.html",
    "217-1": "worksheets/ws217-1.html",
    "219-1": "worksheets/ws219-1.html",
    "220-1": "worksheets/ws220-1.html",

    // Seniors Worksheets
    "301": "worksheets/ws301.html",
    "302": "worksheets/ws302.html",
    "303": "worksheets/ws303.html",
    "304": "worksheets/ws304.html"
};

// Presentation Decks Registry
const pptDetails = {
    "PPT-3.01": { title: "PPT 3.01: Early Review Feedback & Design Iteration", meta: "Seniors - Week 1", content: "<p><strong>Overview:</strong> 20 slides featuring Dyson prototype iteration story, track criteria, and 'Dreams & Gripes' guide.</p>" },
    "PPT-1.01": { title: "PPT 1.01: Capstone Introduction & Team Dynamics", meta: "Juniors - Week 1", content: "<p><strong>Overview:</strong> 15 slides covering Capstone model base, SDGs, and Tuckman's team stages.</p>" },
    "PPT-2.01": { title: "PPT 2.01: Advanced Challenge Review & Research Methods", meta: "Wheelers - Week 1", content: "<p><strong>Overview:</strong> Reviewing Grade 1 foundations and setting targets for Grade 2 Capstone.</p>" }
};

// Generates an interactive link for every Worksheet opening in a NEW TAB
function wsLink(id, name) {
    const label = name || `Worksheet ${id}`;
    const url = worksheetDetails[id] || `#`;
    return `<a href="${url}" target="_blank" class="worksheet-link" title="Open ${label} in New Tab">📄 ${label} ↗</a>`;
}

const data = {
    juniors: [
        { term: "FIRST TERM (WEEKS 1–11)" },
        { phase: "01. Empathy & Challenge", week: "Week 1", session: "1.01 (SS)", status: "Completed", ppt: "PPT-1.01", topic: "Introduction & Challenge Review", activity: "Welcome students, explain team formation stages, review timeline.", deliverables: ["Form teams (5 students)", wsLink("101", "Worksheet 101"), "Submit Exit Ticket"], comment: "Teams formed successfully." },
        { phase: "01. Empathy & Challenge", week: "Week 2", session: "1.02 (SS)", status: "In Progress", ppt: "PPT-1.02", topic: "Design Thinking Focus: Empathy", activity: "Explain empathy phase and data collection tools.", deliverables: ["Define target user profile", wsLink("102", "Worksheet 102"), "Prepare research questions"], comment: "" },
        { phase: "01. Empathy & Challenge", week: "Week 3", session: "1.03 (SS)", status: "Not Started", ppt: "PPT-1.03", topic: "Engaging with User Needs & SDGs", activity: "Connect problem to SDGs and introduce concept mapping.", deliverables: [wsLink("103", "Worksheet 103"), "Link project to 3 SDGs", "Update portfolio"], comment: "" },
        { phase: "01. Empathy & Challenge", week: "Week 4", session: "1.04 (NS)", status: "Not Started", ppt: "Ref-1.04", topic: "Collecting & Organizing User Needs", activity: "Collect field data and create Affinity Map.", deliverables: [wsLink("104", "Worksheet 104"), "Document structured needs"], comment: "" },
        { phase: "02. Ideation & SCAMPER", week: "Week 5", session: "1.05 (SS)", status: "Not Started", ppt: "PPT-1.05", topic: "Researching Solutions & Ideation", activity: "Research prior solutions and apply key competencies.", deliverables: [wsLink("105", "Worksheet 105"), "APA Citations", "Complete Journal 1"], comment: "" },
        { phase: "02. Ideation & SCAMPER", week: "Week 6", session: "1.06 (SS)", status: "Not Started", ppt: "PPT-1.06", topic: "Refining Problem Statement", activity: "Refine problem statement with precision.", deliverables: [wsLink("106-1", "Worksheet 106-1 & 106-2"), "Formulate precise problem statement"], comment: "" },
        { phase: "02. Ideation & SCAMPER", week: "Week 7", session: "1.07 (SS)", status: "Not Started", ppt: "PPT-1.07", topic: "Creative Solutions & SCAMPER", activity: "Apply SCAMPER technique to adapt solution concepts.", deliverables: [wsLink("107-1", "Worksheets 107-1 to 107-4"), "Document modified ideas"], comment: "" },
        { phase: "02. Ideation & SCAMPER", week: "Week 8", session: "1.08 (NS)", status: "Not Started", ppt: "Ref-1.08", topic: "Refining Solutions & Panel Prep", activity: "Filter ideas for final solution and prepare presentation.", deliverables: [wsLink("108-1", "Worksheets 108-1 & 108-2"), "Submit Panel Review Deliverables"], comment: "" },
        { phase: "03. Prototyping", week: "Week 9", session: "1.09 (SS)", status: "Not Started", ppt: "PPT-1.09", topic: "Project Plan & Prototype Design", activity: "Establish project plan and assign roles.", deliverables: [wsLink("109-1", "Worksheets 109-1 & 109-2"), "Document Section II"], comment: "" },
        { phase: "03. Prototyping", week: "Week 10", session: "1.10 (NS)", status: "Not Started", ppt: "Ref-1.10", topic: "Refining Solutions & Building", activity: "Watch prototyping video and prepare technical drawings.", deliverables: [wsLink("110-1", "Worksheets 110-1 & 110-2"), "Fill out Journal 2"], comment: "" },
        { phase: "Term 1 Buffer", week: "Week 11", session: "SPARE W1", status: "Not Started", ppt: "N/A", topic: "Mid-Year Buffer & Panel Fixes", activity: "Flexibility week for mid-term exams and portfolio grading.", deliverables: ["Portfolio catch-up", "Journal sign-offs"], comment: "Mid-term exam week." },
        
        { term: "SECOND TERM (WEEKS 12–22)" },
        { phase: "03. Prototyping", week: "Week 12", session: "1.11 (SS)", status: "Not Started", ppt: "PPT-1.11", topic: "Testing Prototypes", activity: "Apply Concentric Circles strategy to test feasibility.", deliverables: [wsLink("111-1", "Worksheets 111-1 & 111-2"), "Document test results"], comment: "" },
        { phase: "03. Prototyping", week: "Week 13", session: "1.12 (NS)", status: "Not Started", ppt: "Ref-1.12", topic: "Prototype Refinement & Decisions", activity: "Make strategic financial decisions based on budget.", deliverables: [wsLink("112-1", "Worksheets 112-1 to 112-5"), "Document Section V"], comment: "" },
        { phase: "04. Testing & BMC", week: "Week 14", session: "1.13 (NS)", status: "Not Started", ppt: "Ref-1.13", topic: "Testing Prototypes & Feedback", activity: "Present prototypes to industry experts.", deliverables: [wsLink("113-1", "Worksheets 113-1 & 113-2"), "Record expert feedback"], comment: "" },
        { phase: "04. Testing & BMC", week: "Week 15", session: "1.14 (NS)", status: "Not Started", ppt: "Ref-1.14", topic: "Testing & BMC 3 Cs Analysis", activity: "Explain Customer, Cost, and Competitor elements.", deliverables: [wsLink("114-1", "Worksheets 114-1 to 114-3"), "Outline Display Board (114-4)"], comment: "" },
        { phase: "04. Testing & BMC", week: "Week 16", session: "1.15 (SS)", status: "Not Started", ppt: "PPT-1.15", topic: "Testing Prototypes & BMC", activity: "Explain left side of BMC & test error rates.", deliverables: [wsLink("115-1", "Worksheets 115-1 to 115-3"), "APA formatted test readings"], comment: "" },
        { phase: "04. Testing & BMC", week: "Week 17", session: "1.16 (NS)", status: "Not Started", ppt: "Ref-1.16", topic: "Refining Prototypes & Storytelling", activity: "Complete all 9 blocks of BMC.", deliverables: [wsLink("116", "Worksheet 116 (BMC)"), "Journal 3 complete"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 18", session: "1.17 (SS)", status: "Not Started", ppt: "PPT-1.17", topic: "Iterative Design & Storytelling", activity: "Analyze test data and refine pitch.", deliverables: [wsLink("117-1", "Worksheets 117-1 & 117-2"), "Document Section IV"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 19", session: "1.18 (NS)", status: "Not Started", ppt: "Ref-1.18", topic: "Finalizing Display Boards", activity: "Complete Methods & Testing section on display board.", deliverables: ["Learning reflections", "Submit Display Board"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 20", session: "1.19 (SS)", status: "Not Started", ppt: "PPT-1.19", topic: "Storytelling & Communication", activity: "Train on persuasive speech and body language.", deliverables: [wsLink("119-1", "Worksheets 119-1 & 119-2"), "Journal 4 complete"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 21", session: "1.20 (NS)", status: "Not Started", ppt: "Ref-1.20", topic: "Final EXPO Rehearsals", activity: "Conduct final Mock EXPO presentations.", deliverables: [wsLink("120-1", "Worksheets 120-1 & 120-2"), "Final Board + Prototype + Portfolio"], comment: "" },
        { phase: "Term 2 Buffer", week: "Week 22", session: "SPARE W2", status: "Not Started", ppt: "N/A", topic: "EXPO Closeout & Archiving", activity: "Final portfolio evaluation and award wrap-up.", deliverables: ["Final grade sign-off"], comment: "" }
    ],
    wheelers: [
        { term: "FIRST TERM (WEEKS 1–11)" },
        { phase: "01. Advanced Empathy", week: "Week 1", session: "2.01 (SS)", status: "Completed", ppt: "PPT-2.01", topic: "Introduction & Challenge Review", activity: "Review prior concepts and organize teams.", deliverables: ["Assign team roles", wsLink("201", "Worksheet 201"), "Submit Exit Ticket"], comment: "Roles assigned." },
        { phase: "01. Advanced Empathy", week: "Week 2", session: "2.02 (SS)", status: "In Progress", ppt: "PPT-2.02", topic: "Advanced Empathy & Data", activity: "Teach advanced in-depth interviews and quantitative surveys.", deliverables: ["Create target User Profile", wsLink("202", "Worksheet 202")], comment: "" },
        { phase: "01. Advanced Empathy", week: "Week 3", session: "2.03 (SS)", status: "Not Started", ppt: "PPT-2.03", topic: "User Needs Analysis & SDGs", activity: "Analyze user data patterns and map to 5 SDGs.", deliverables: [wsLink("203", "Worksheet 203"), "Construct Affinity Map"], comment: "" },
        { phase: "01. Advanced Empathy", week: "Week 4", session: "2.04 (NS)", status: "Not Started", ppt: "Ref-2.04", topic: "Advanced Needs Methods", activity: "Conduct field data collection and assess source credibility.", deliverables: [wsLink("204", "Worksheet 204"), "APA Citations"], comment: "" },
        { phase: "02. Solution Specs", week: "Week 5", session: "2.05 (SS)", status: "Not Started", ppt: "PPT-2.05", topic: "Researching Solutions & Plan", activity: "Analyze industrial solutions and set requirements.", deliverables: [wsLink("205", "Worksheet 205"), "Journal 1 complete"], comment: "" },
        { phase: "02. Solution Specs", week: "Week 6", session: "2.06 (NS)", status: "Not Started", ppt: "Ref-2.06", topic: "Refining Solutions & Planning", activity: "Draft solution summary and dimensional sketch.", deliverables: [wsLink("206-1", "Worksheets 206-1 & 206-2"), "Panel points prep"], comment: "" },
        { phase: "02. Solution Specs", week: "Week 7", session: "2.07 (SS)", status: "Not Started", ppt: "PPT-2.07", topic: "Creative Solutions & SCAMPER", activity: "Apply SCAMPER to refine top concepts.", deliverables: [wsLink("207-1", "Worksheets 207-1 to 207-4"), "Define selection criteria"], comment: "" },
        { phase: "02. Solution Specs", week: "Week 8", session: "2.08 (NS)", status: "Not Started", ppt: "Ref-2.08", topic: "Presentation Prep", activity: "Select evidence-based final solution.", deliverables: [wsLink("208-1", "Worksheets 208-1 & 208-2"), "Submit Panel Deliverables"], comment: "" },
        { phase: "03. Advanced Prototyping", week: "Week 9", session: "2.09 (SS)", status: "Not Started", ppt: "PPT-2.09", topic: "Prototype Design", activity: "Build execution plan and create digital 3D/diagrams.", deliverables: [wsLink("209-1", "Worksheets 209-1 & 209-2"), "Document Section II"], comment: "" },
        { phase: "03. Advanced Prototyping", week: "Week 10", session: "2.10 (NS)", status: "Not Started", ppt: "Ref-2.10", topic: "Building Prototypes", activity: "Watch Prototyping video and test materials.", deliverables: [wsLink("210-1", "Worksheets 210-1 & 210-2"), "Journal 2 complete"], comment: "" },
        { phase: "Term 1 Buffer", week: "Week 11", session: "SPARE W1", status: "Not Started", ppt: "N/A", topic: "Mid-Year Buffer & Catch-up", activity: "Flexibility week for mid-term exams.", deliverables: ["Journal sign-offs"], comment: "" },
        
        { term: "SECOND TERM (WEEKS 12–22)" },
        { phase: "03. Advanced Prototyping", week: "Week 12", session: "2.11 (SS)", status: "Not Started", ppt: "PPT-2.11", topic: "Testing & Refining Design", activity: "Evaluate prototype viability via Concentric Circles.", deliverables: [wsLink("211-1", "Worksheets 211-1 & 211-2"), "Testing plan in portfolio"], comment: "" },
        { phase: "03. Advanced Prototyping", week: "Week 13", session: "2.12 (NS)", status: "Not Started", ppt: "Ref-2.12", topic: "Prototype Decisions", activity: "Make budget tradeoffs between components.", deliverables: [wsLink("212-1", "Worksheets 212-1 to 212-5"), "Document Section V"], comment: "" },
        { phase: "04. Integrated BMC", week: "Week 14", session: "2.13 (NS)", status: "Not Started", ppt: "Ref-2.13", topic: "Expert Feedback & BMC", activity: "Present prototypes to domain experts.", deliverables: [wsLink("213-1", "Worksheets 213-1 & 213-2"), "Expert logs"], comment: "" },
        { phase: "04. Integrated BMC", week: "Week 15", session: "2.14 (NS)", status: "Not Started", ppt: "Ref-2.14", topic: "Testing & BMC 3 Cs", activity: "Align prototype specs with Customer, Cost, Competitors.", deliverables: [wsLink("214-1", "Worksheets 214-1 to 214-3"), "Display Board draft (214-4)"], comment: "" },
        { phase: "04. Integrated BMC", week: "Week 16", session: "2.15 (SS)", status: "Not Started", ppt: "PPT-2.15", topic: "Testing & Refining BMC", activity: "Record quantitative test data & error percentages.", deliverables: [wsLink("215-1", "Worksheets 215-1 to 215-3"), "APA test logs"], comment: "" },
        { phase: "04. Integrated BMC", week: "Week 17", session: "2.16 (NS)", status: "Not Started", ppt: "Ref-2.16", topic: "Storytelling & BMC", activity: "Connect all 9 blocks of BMC.", deliverables: [wsLink("216", "Worksheet 216 (BMC)"), "Journal 3 complete"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 18", session: "2.17 (SS)", status: "Not Started", ppt: "PPT-2.17", topic: "Iterative Design & Pitch", activity: "Execute iterative design improvements.", deliverables: [wsLink("217-1", "Worksheets 217-1 & 217-2"), "Document Section IV"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 19", session: "2.18 (NS)", status: "Not Started", ppt: "Ref-2.18", topic: "Display Board Prep", activity: "Finalize poster board testing charts.", deliverables: ["Learning reflections", "Submit Display Board"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 20", session: "2.19 (SS)", status: "Not Started", ppt: "PPT-2.19", topic: "Communication Skills", activity: "Conduct peer pitch presentations.", deliverables: [wsLink("219-1", "Worksheets 219-1 & 219-2"), "Journal 4 complete"], comment: "" },
        { phase: "05. Final EXPO Prep", week: "Week 21", session: "2.20 (NS)", status: "Not Started", ppt: "Ref-2.20", topic: "Mock EXPO Rehearsals", activity: "Run full EXPO rehearsals.", deliverables: [wsLink("220-1", "Worksheets 220-1 & 220-2"), "Final Board + Prototype"], comment: "" },
        { phase: "Term 2 Buffer", week: "Week 22", session: "SPARE W2", status: "Not Started", ppt: "N/A", topic: "Year-End Archiving", activity: "Final grading and team closeout.", deliverables: ["Final portfolio submission"], comment: "" }
    ],
    seniors: [
        { term: "FIRST TERM (WEEKS 1–11)" },
        { phase: "01. Dual-Track Direction", week: "Week 1", session: "3.01 (SS)", status: "Completed", ppt: "PPT-3.01", topic: "Early Review Feedback & Challenge", activity: "Study Dyson story & divide teams into tracks.", deliverables: [wsLink("301", "Worksheet 301"), "Formulate 'How Might We' questions", "Submit Revised Timeline"], comment: "Track 2 assignments completed." },
        { phase: "01. Dual-Track Direction", week: "Week 2", session: "3.02 (NS)", status: "In Progress", ppt: "Ref-3.02", topic: "Team Collaboration & Problem Analysis", activity: "Student-led teamwork to analyze stakeholders & context.", deliverables: [wsLink("302", "Worksheet 302"), "Document role distribution"], comment: "" },
        { phase: "02. Tri-Fold Balance", week: "Week 3", session: "3.03 (SS)", status: "Under Review", ppt: "PPT-3.03", topic: "Collaborative Work & Iteration", activity: "Review team dynamics video and construct testing plans.", deliverables: [wsLink("303", "Worksheet 303"), "Document sources in APA Format"], comment: "" },
        { phase: "02. Tri-Fold Balance", week: "Week 4", session: "3.04 (NS)", status: "Not Started", ppt: "Ref-3.04", topic: "Team Collaboration & Dynamics", activity: "Unstructured team session to monitor tasks.", deliverables: [wsLink("304", "Worksheet 304"), "Document weekly milestones"], comment: "" },
        { phase: "02. Tri-Fold Balance", week: "Week 5", session: "3.05 (SS)", status: "Not Started", ppt: "PPT-3.05", topic: "Feasibility, Viability, Desirability", activity: "Evaluate project concepts across balance framework.", deliverables: ["Draw 3-ring balance diagram", "Present balance justification"], comment: "" },
        { phase: "03. Advanced Specs", week: "Week 6", session: "3.06 (NS)", status: "Not Started", ppt: "Ref-3.06", topic: "Technical Specs & Sourcing", activity: "Define strict technical constraints & tolerances.", deliverables: ["Technical spec sheet", "Sourcing plan"], comment: "" },
        { phase: "03. Advanced Specs", week: "Week 7", session: "3.07 (SS)", status: "Not Started", ppt: "PPT-3.07", topic: "Senior Panel Prep", activity: "Consolidate preliminary research and engineering formulas.", deliverables: ["Draft Panel deck", "Risk matrix"], comment: "" },
        { phase: "03. Advanced Specs", week: "Week 8", session: "3.08 (NS)", status: "Not Started", ppt: "Ref-3.08", topic: "Senior Panel Defense", activity: "Formal presentation defense before technical judges.", deliverables: ["Panel Review Submission"], comment: "" },
        { phase: "04. Prototyping Phase 1", week: "Week 9", session: "3.09 (SS)", status: "Not Started", ppt: "PPT-3.09", topic: "Initial Prototype Assembly", activity: "Begin physical/digital construction.", deliverables: ["Assembly log", "Initial framework"], comment: "" },
        { phase: "04. Prototyping Phase 1", week: "Week 10", session: "3.10 (NS)", status: "Not Started", ppt: "Ref-3.10", topic: "Mid-Year Design Audit", activity: "Internal quality review and performance bench-testing.", deliverables: ["Mid-year audit report", "Journal 2 complete"], comment: "" },
        { phase: "Term 1 Buffer", week: "Week 11", session: "SPARE W1", status: "Not Started", ppt: "N/A", topic: "Mid-Year Buffer & Panel Fixes", activity: "Buffer week for mid-term exams & panel fixes.", deliverables: ["Panel remediation report"], comment: "" },

        { term: "SECOND TERM (WEEKS 12–22)" },
        { phase: "05. Advanced Testing", week: "Week 12", session: "3.11 (SS)", status: "Not Started", ppt: "PPT-3.11", topic: "System Integration & Testing", activity: "Execute multi-scenario testing regimes.", deliverables: ["Quantitative test logs", "APA analysis section"], comment: "" },
        { phase: "05. Advanced Testing", week: "Week 13", session: "3.12 (NS)", status: "Not Started", ppt: "Ref-3.12", topic: "Optimizing Functionality", activity: "Address mechanical/software bottlenecks.", deliverables: ["Optimization logs", "Updated schematics"], comment: "" },
        { phase: "06. Enterprise BMC", week: "Week 14", session: "3.13 (NS)", status: "Not Started", ppt: "Ref-3.13", topic: "Industrial Feasibility & BMC", activity: "Refine full BMC including supply chain & unit economics.", deliverables: ["Full Senior BMC", "Feasibility analysis"], comment: "" },
        { phase: "06. Enterprise BMC", week: "Week 15", session: "3.14 (SS)", status: "Not Started", ppt: "PPT-3.14", topic: "Industry Expert Review", activity: "Consultation sessions with external sector experts.", deliverables: ["Expert feedback logs", "Design iteration sheet"], comment: "" },
        { phase: "07. Senior EXPO Prep", week: "Week 16", session: "3.15 (NS)", status: "Not Started", ppt: "Ref-3.15", topic: "Display Board & Scientific Poster", activity: "Design high-grade academic posters.", deliverables: ["Display Board draft", "Journal 3 complete"], comment: "" },
        { phase: "07. Senior EXPO Prep", week: "Week 17", session: "3.16 (SS)", status: "Not Started", ppt: "PPT-3.16", topic: "Iterative Pitch Refinement", activity: "Refine technical storytelling.", deliverables: ["Pitch deck v2", "Peer scorecards"], comment: "" },
        { phase: "07. Senior EXPO Prep", week: "Week 18", session: "3.17 (NS)", status: "Not Started", ppt: "Ref-3.17", topic: "Final Prototype Calibration", activity: "Final calibration of hardware/software for EXPO.", deliverables: ["Working prototype lock", "Completed Board"], comment: "" },
        { phase: "07. Senior EXPO Prep", week: "Week 19", session: "3.18 (SS)", status: "Not Started", ppt: "PPT-3.18", topic: "Presentation Rehearsals", activity: "Mock presentations simulating judge Q&A.", deliverables: ["Mock rubric scorecards", "Journal 4 complete"], comment: "" },
        { phase: "07. Senior EXPO Prep", week: "Week 20", session: "3.19 (NS)", status: "Not Started", ppt: "Ref-3.19", topic: "Senior Capstone EXPO Execution", activity: "Formal presentation and evaluation at Capstone EXPO.", deliverables: ["Final Submission: Prototype + Board + Portfolio"], comment: "" },
        { phase: "08. Graduation Audit", week: "Week 21", session: "3.20 (SS)", status: "Not Started", ppt: "PPT-3.20", topic: "Senior Defense & Grade Audit", activity: "Final academic audit and grade sign-off (15% of Senior total).", deliverables: ["Signed Capstone Grade Sheet"], comment: "" },
        { phase: "Term 2 Buffer", week: "Week 22", session: "SPARE W2", status: "Not Started", ppt: "N/A", topic: "Year-End Archiving", activity: "Final senior graduation clearance and repository upload.", deliverables: ["Project digital repository upload"], comment: "" }
    ]
};

let currentGrade = 'juniors';

function getStatusBadgeClass(status) {
    switch (status) {
        case 'Completed': return 'status-completed';
        case 'In Progress': return 'status-progress';
        case 'Under Review': return 'status-review';
        default: return 'status-notstarted';
    }
}

function getRowStatusClass(status) {
    switch (status) {
        case 'Completed': return 'row-completed';
        case 'In Progress': return 'row-progress';
        case 'Under Review': return 'row-review';
        default: return 'row-notstarted';
    }
}

function updateStatus(selectElement) {
    const newStatus = selectElement.value;
    const parentRow = selectElement.closest('tr');
    
    selectElement.className = `status-select ${getStatusBadgeClass(newStatus)}`;
    parentRow.className = getRowStatusClass(newStatus);
}

function renderTable(grade) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    if (!data[grade] || data[grade].length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 2rem; color: var(--text-muted);">Grade schedule loading...</td></tr>`;
        return;
    }

    data[grade].forEach(row => {
        if (row.term) {
            const tr = document.createElement('tr');
            tr.className = 'term-row';
            tr.innerHTML = `<td colspan="9">${row.term}</td>`;
            tbody.appendChild(tr);
            return;
        }

        const isSS = row.session.includes('SS');
        const isSpare = row.session.includes('SPARE');
        
        let badgeClass = 'badge-ns';
        if (isSS) badgeClass = 'badge-ss';
        if (isSpare) badgeClass = 'badge-spare';
        
        const initialStatus = row.status || 'Not Started';
        const rowClass = getRowStatusClass(initialStatus);
        const badgeStatusClass = getStatusBadgeClass(initialStatus);

        const tr = document.createElement('tr');
        if (isSpare) {
            tr.className = 'spare-row';
        } else {
            tr.className = rowClass;
        }

        tr.innerHTML = `
            <td><span class="phase-tag">${row.phase}</span></td>
            <td class="week-tag">${row.week}</td>
            <td><span class="badge ${badgeClass}">${row.session}</span></td>
            <td>
                <select class="status-select ${badgeStatusClass}" onchange="updateStatus(this)">
                    <option value="Not Started" ${initialStatus === 'Not Started' ? 'selected' : ''}>Not Started</option>
                    <option value="In Progress" ${initialStatus === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Under Review" ${initialStatus === 'Under Review' ? 'selected' : ''}>Under Review</option>
                    <option value="Completed" ${initialStatus === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
            </td>
            <td>
                ${row.ppt ? `<span class="badge badge-ppt" onclick="openPPT('${row.ppt}')">📊 ${row.ppt}</span>` : '<span style="color:var(--text-muted); font-size:0.8rem;">N/A</span>'}
            </td>
            <td><strong>${row.topic}</strong></td>
            <td>${row.activity}</td>
            <td>
                <ul>
                    ${row.deliverables.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </td>
            <td>
                <textarea class="comment-input" placeholder="Add note...">${row.comment || ''}</textarea>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function filterGrade(grade) {
    currentGrade = grade;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderTable(grade);
}

function searchTable() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr:not(.term-row)');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}

// Modal Pop-up Handlers (For Slide Presentations)
function openPPT(pptId) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const meta = document.getElementById('modalMeta');
    const body = document.getElementById('modalBody');

    if (pptDetails[pptId]) {
        title.innerHTML = pptDetails[pptId].title;
        meta.innerHTML = pptDetails[pptId].meta;
        body.innerHTML = pptDetails[pptId].content;
    } else {
        title.innerHTML = `Reference Deck: ${pptId}`;
        meta.innerHTML = "Session Materials";
        body.innerHTML = `<p>Slide presentation and reference guidelines for session ${pptId} are available in the Facilitator Drive.</p>`;
    }

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeModal();
    }
};

renderTable('juniors');