// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number);
    const star = '*'.repeat(n);
    
    for (let i = 0; i < m; i++) {
      console.log(star);
    }
});
