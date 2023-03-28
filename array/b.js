function decrescente(nums) {
  if (nums[0] < nums[1] && nums[0] < nums[2]) {
    return nums[0];
  } else if (nums[1] < nums[2] && nums[1] < nums[2]) {
    return nums[1];
  } else return nums[2];
}

console.log(decrescente([1, 5, 8]));
