<template>
  <input id="check" type="checkbox" />
</template>
<style>
#check {
  display: none;
}
#check:checked ~ header nav {
  display: none;
}
</style>
