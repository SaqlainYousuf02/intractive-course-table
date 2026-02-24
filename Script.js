
//Define array of courses (DATA)
     const courses = [
    { name: "Complete Python Bootcamp", instructor: "Muhammad Usman", category: "Programming", duration: "22 hours" },
    { name: "UI/UX Design Masterclass", instructor: "Ahmed Raza", category: "Design", duration: "18 hours" },
    { name: "Digital Marketing Strategy", instructor: "Abdul Rehman", category: "Marketing", duration: "12 hours" },
    { name: "Business Analytics with Excel", instructor: "Hassan Ali", category: "Data Science", duration: "15 hours" },
    { name: "React - The Complete Guide", instructor: "Omar Farooq", category: "Programming", duration: "48 hours" },
    { name: "Graphic Design Fundamentals", instructor: "Bilal Ahmed", category: "Design", duration: "10 hours" },
    { name: "MBA in a Box", instructor: "Saad Khan", category: "Business", duration: "30 hours" },
    { name: "Machine Learning A-Z", instructor: "Zain Ul Abideen", category: "Data Science", duration: "42 hours" },
    { name: "Social Media Marketing", instructor: "Tariq Mehmood", category: "Marketing", duration: "8 hours" },
    { name: "JavaScript: Advanced Concepts", instructor: "Hamza Khalid", category: "Programming", duration: "25 hours" },
    { name: "Adobe Photoshop CC Essentials", instructor: "Imran Qureshi", category: "Design", duration: "14 hours" },
    { name: "Financial Analysis & Valuation", instructor: "Yasir Hussain", category: "Business", duration: "20 hours" },
    { name: "Deep Learning Specialization", instructor: "Kashif Anwar", category: "Data Science", duration: "56 hours" },
    { name: "Content Marketing Certification", instructor: "Noman Akhtar", category: "Marketing", duration: "6 hours" },
    { name: "Full Stack Web Development", instructor: "Arsalan Haider", category: "Programming", duration: "65 hours" },
    { name: "Figma UI Design Essentials", instructor: "Fahad Sheikh", category: "Design", duration: "11 hours" },
    { name: "Project Management Professional", instructor: "Rizwan Ahmed", category: "Business", duration: "35 hours" },
    { name: "SQL for Data Analysis", instructor: "Shahid Iqbal", category: "Data Science", duration: "16 hours" },
    { name: "Email Marketing Mastery", instructor: "Farhan Mahmood", category: "Marketing", duration: "9 hours" },
    { name: "iOS App Development", instructor: "Usman Tariq", category: "Programming", duration: "28 hours" },
    { name: "Brand Identity Design", instructor: "Abdullah Khan", category: "Design", duration: "13 hours" },
    { name: "Leadership & Management Skills", instructor: "Mubashir Ali", category: "Business", duration: "17 hours" },
    { name: "Python for Data Science", instructor: "Zeeshan Ahmed", category: "Data Science", duration: "24 hours" },
    { name: "SEO Mastery Course", instructor: "Hammad Raza", category: "Marketing", duration: "10 hours" },
    { name: "Node.js, Express, MongoDB Bootcamp", instructor: "Ibrahim Khalid", category: "Programming", duration: "38 hours" },
    { name: "Motion Graphics with After Effects", instructor: "Adeel Ahmed", category: "Design", duration: "22 hours" },
    { name: "Entrepreneurship Fundamentals", instructor: "Talha Mehmood", category: "Business", duration: "14 hours" },
    { name: "Tableau Data Visualization", instructor: "Qasim Ali", category: "Data Science", duration: "19 hours" },
    { name: "Google Ads Certification", instructor: "Sajid Hussain", category: "Marketing", duration: "7 hours" },
    { name: "Flutter & Dart Complete Course", instructor: "Waqas Ahmed", category: "Programming", duration: "45 hours" }
];

//Render table dynamically (RENDERING LOGIC)
        function getCategoryBadgeClass(category) {
            const map = {
                'Programming': 'badge-programming',
                'Design': 'badge-design',
                'Business': 'badge-business',
                'Marketing': 'badge-marketing',
                'Data Science': 'badge-data'
            };
            return map[category] || 'badge-programming';
        }

        function renderTable() {
            const tbody = document.getElementById('tableBody');
            
            courses.forEach(course => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="font-medium text-gray-900">${course.name}</td>
                    <td class="text-gray-700">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                ${course.instructor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            <span>${course.instructor}</span>
                        </div>
                    </td>
                    <td>
                        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeClass(course.category)}">
                            ${course.category}
                        </span>
                    </td>
                    <td class="text-gray-600">
                        <span class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            ${course.duration}
                        </span>
                    </td>
                `;
                tbody.appendChild(row);
            });
            
// Update total count
            document.getElementById('totalCount').textContent = courses.length;
        }
//Initialize DataTables (Search, Sort, Pagination)
        $(document).ready(function() {
            // Render data first
            renderTable();
            
//Initialize DataTables
            $('#courseTable').DataTable({
                responsive: true,
                pageLength: 10,
                lengthMenu: [[5, 10, 15, 20, 25, -1], [5, 10, 15, 20, 25, "All"]],
                order: [[0, 'asc']],
                language: {
                    search: "🔍 Search courses:",
                    lengthMenu: "Show _MENU_ entries",
                    info: "Showing _START_ to _END_ of _TOTAL_ courses",
                    infoEmpty: "No courses available",
                    infoFiltered: "(filtered from _MAX_ total courses)",
                    paginate: {
                        first: "First",
                        last: "Last",
                        next: "Next →",
                        previous: "← Previous"
                    },
                    zeroRecords: "No matching courses found"
                }
            });
        });