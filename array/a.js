function crescente(nums) {
  crescente = [];
  if (nums[0] > nums[1] && nums[0] > nums[2]) {
    crescente.push(nums[0]);
  } else if (nums[1] > nums[0] && nums[1] > nums[2]) {
    crescente.push(nums[0]);
  } else if (nums[2] > nums[1] && nums[2] > nums[1]) {
    crescente.push(nums[0]);
  }
}

console.log(crescente([1, 5, 8]));
