function toggle(i){
  const panels = document.querySelectorAll('.panel');
  panels.forEach((p, index)=>{
    p.style.display =
      index === i && p.style.display !== 'block'
        ? 'block'
        : 'none';
  });
}
