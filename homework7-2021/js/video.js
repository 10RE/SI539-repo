var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeText(video.volume);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 1.05;
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current position: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	video.muted = !video.muted;
	if (video.muted){
		document.getElementById("mute").textContent = "Unmute";
	}
	else {
		document.getElementById("mute").textContent = "Mute";
	}
});

function updateVolumeText(vol) {
	document.getElementById("volume").textContent = vol * 100 + "%";
}

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume Change");
	let slider = document.getElementById("slider");
	//console.log(slider.value);
	//console.log(video.volume);
	video.volume = slider.value / 100;
	updateVolumeText(video.volume);	
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply Filter");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Filter");
	video.classList.remove("oldSchool");
});