export function generateRandomID(uuid_length = 8) {
    let uuid = "";
    for (let i = 0; i < uuid_length; i++) {
        const randomVal = Math.round(Math.random() * 9);
        uuid += randomVal;
    }
    return uuid;
}

export function svgToImageDownload(svg,qrcode){
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = svg.clientWidth;
    canvas.height = svg.clientHeight;

    // Create a data URL from the SVG
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();

    img.onload = function () {
      context.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");

      // Create a download link for the PNG
      const downloadLink = document.createElement("a");
      downloadLink.href = dataURL;
      downloadLink.download = `${qrcode}.png`;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml," + encodeURIComponent(svgData);
}
