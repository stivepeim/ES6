async function getSomeThing() {
  console.log('1');
  await function() {
    console.log('2')
  }
  console.log('3')
}

getSomeThing()