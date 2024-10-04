let hasPlayed = false;

document
  .getElementById("clickable-image")
  .addEventListener("click", function (e) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    document.body.appendChild(heart);

    heart.style.left = `${e.clientX - 20}px`;
    heart.style.top = `${e.clientY - 20}px`;

    setTimeout(() => heart.remove(), 1000);

    if (!hasPlayed) {
      const audio = document.getElementById("click-sound");
      audio.volume = 0.1;
      audio.play();
      hasPlayed = true;
    }
  });


let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;

function updateFPS() {
    const now = performance.now();
    const delta = now - lastFrameTime;
    frameCount++;

    if (delta >= 1000) {
        fps = Math.round((frameCount * 1000) / delta);
        document.getElementById('fps-counter').textContent = `FPS: ${fps}`;
        frameCount = 0;
        lastFrameTime = now;
    }

    requestAnimationFrame(updateFPS);
}

updateFPS();

function getSystemInfo() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const availableMemory = navigator.deviceMemory || 'N/A';
    const numberOfCores = navigator.hardwareConcurrency || 'N/A';
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const currentTime = new Date().toLocaleTimeString();

    return `
        <strong>Screen Resolution:</strong> ${screenWidth} x ${screenHeight} <br>
        <strong>Browser:</strong> ${browserName} ${browserVersion} <br>
        <strong>Platform:</strong> ${platform} <br>
        <strong>Available Memory:</strong> ${availableMemory} GB <br>
        <strong>CPU Cores:</strong> ${numberOfCores} <br>
        <strong>Current Time:</strong> ${currentTime}
    `;
}

function updateSystemInfo() {
    const systemInfoElement = document.getElementById('system-info');
    systemInfoElement.innerHTML = getSystemInfo();
    setTimeout(updateSystemInfo, 1000);
}

updateSystemInfo();

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function toggleSystemInfo() {
    const systemInfoElement = document.getElementById('system-info');
    const toggleButton = document.getElementById('toggle-system-info');

    if (systemInfoElement.style.display === 'none') {
        systemInfoElement.style.display = 'block';
        toggleButton.textContent = 'Hide System Info';
    } else {
        systemInfoElement.style.display = 'none';
        toggleButton.textContent = 'Show System Info';
    }
}

document.getElementById('toggle-system-info').addEventListener('click', toggleSystemInfo);

function updateSystemInfo() {
    if (!isMobile()) {
        document.getElementById('toggle-system-info').style.display = 'inline-block';
        const systemInfoElement = document.getElementById('system-info');
        systemInfoElement.innerHTML = getSystemInfo();
        setTimeout(updateSystemInfo, 1000);
    }
}

updateSystemInfo();
