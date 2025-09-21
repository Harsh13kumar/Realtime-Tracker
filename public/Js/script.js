let socket = io();
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      socket.emit("send-location", { latitude, longitude });
    },
    (err) => {
      console.log(err);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000,
    }
  );
}


const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Created by Harsh",
  maxZoom: 19,
}).addTo(map);

const marker = {};

socket.on("receive-location", (data) => {
map.flyTo([data.latitude, data.longitude], 19);
  const id = data.id;
  if (marker[id]) {
    marker[id].setLatLng([data.latitude, data.longitude]);
  } else {
    marker[id] = L.marker([data.latitude, data.longitude]).addTo(map);
  }
  console.log(marker);
  
});

socket.on("user-disconnected", (id) => {
  if (marker[id]) {
    map.removeLayer(marker[id]);
    delete marker[id];
  }
});
