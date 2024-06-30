document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageInput = document.getElementById('image');
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value).join(', ');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const studentList = document.getElementById('studentList');
            const row = document.createElement('tr');

            row.innerHTML = `
                <td colspan="2">
                    <p margin-bottom:10px><strong>${name}</strong></p>
                    <p margin-bottom:10px>${gender}</p>
                    <p margin-bottom:10px>${email}</p>
                    <p margin-bottom:10px><a href="${website}" target="_blank">${website}</a></p>
                    <p margin-bottom:10px>${skills}</p>
                </td>
                <td></td>
                <td>
                    <img src="${e.target.result}" alt="${name}">
                </td>
            `;

            studentList.appendChild(row);
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    document.getElementById('enrollmentForm').reset();
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('enrollmentForm').reset();
});
