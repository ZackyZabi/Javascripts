<!DOCTYPE html><script>
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let generator = generateSequence();

for(let done of generator) {
  alert(done); // 1, then 2
}

let one = generator.next();
alert(one.value);

</script>
