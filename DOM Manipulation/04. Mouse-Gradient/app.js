function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");

  gradient.addEventListener("mousemove", event => {
    const currMousePosition = event.offsetX;
      const percent = Math.floor((currMousePosition / 300) * 100);
      result.textContent = `${percent}%`
      
      
    // console.log(currMousePosition);
  });
}
