function crescente(nums) {
  switch (true) {
    case nums[0] < nums[1] && nums[0] < nums[2]: {
      if (nums[1] < nums[2]) {
        return [nums[0], nums[1], nums[2]];
      } else return [nums[0], nums[2], nums[1]];
    }
    case nums[1] < nums[0] && nums[1] < nums[2]: {
      if (nums[0] < nums[2]) {
        return [nums[1], nums[0], nums[2]];
      } else return [nums[1], nums[2], nums[0]];
    }
    case nums[2] < nums[0] && nums[2] < nums[1]: {
      if (nums[0] < nums[1]) {
        return [nums[2], nums[0], nums[1]];
      } else return [nums[2], nums[1], nums[0]];
    }
  }
}

console.log(crescente([1, 3, 2]));
