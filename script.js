// Sample activity data
const activities = [
    {
        id: 1,
        type: 'Run',
        distance: '10.2 km',
        duration: '52:18',
        date: 'Today, 07:30 AM',
        elevation: '125 m',
        calories: '720'
    },
    {
        id: 2,
        type: 'Ride',
        distance: '32.5 km',
        duration: '1:25:42',
        date: 'Yesterday, 05:45 PM',
        elevation: '340 m',
        calories: '950'
    },
    {
        id: 3,
        type: 'Run',
        distance: '5.8 km',
        duration: '28:12',
        date: '2 days ago, 06:15 AM',
        elevation: '65 m',
        calories: '420'
    }
];

// Display activities
function displayActivities() {
    const activityList = document.querySelector('.activity-list');
    
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <div class="activity-type">
                <i class="fas fa-${activity.type === 'Run' ? 'running' : 'bicycle'}"></i>
                <div>
                    <h4>${activity.type}</h4>
                    <p>${activity.date}</p>
                </div>
            </div>
            <div class="activity-details">
                <p><strong>${activity.distance}</strong></p>
                <p>${activity.duration}</p>
            </div>
        `;
        
        activityList.appendChild(activityItem);
    });
}

// Initialize map
function initMap() {
    const map = L.map('map').setView([-6.2088, 106.8456], 13); // Default to Jakarta
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a sample route
    const route = [
        [-6.2088, 106.8456],
        [-6.2100, 106.8470],
        [-6.2120, 106.8500],
        [-6.2140, 106.8530]
    ];
    
    L.polyline(route, {color: '#fc4c02'}).addTo(map);
    
    // Add start and end markers
    L.marker(route[0]).addTo(map)
        .bindPopup('Start Point');
    
    L.marker(route[route.length - 1]).addTo(map)
        .bindPopup('End Point');
}

// Record button functionality
document.getElementById('record-activity').addEventListener('click', function() {
    alert('Recording activity... This would start GPS tracking in a real app.');
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayActivities();
    initMap();
});
