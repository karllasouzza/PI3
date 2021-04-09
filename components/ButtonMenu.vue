<template>
  <input id="check" type="checkbox" />
</template>
<style>
#check {
  display: none;
}

@media (max-width: 967px) {
  #check:checked ~ header nav {
    display: none;
  }
}
</style>
