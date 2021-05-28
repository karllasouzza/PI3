<template>
  <input id="check" type="checkbox" />
</template>
<style>
#check {
  display: none;
}

@media (max-width: 967px) {
  #check:checked ~ header nav {
    display: flex;
  }
  #check:checked ~ header div label .icon {
    transform: rotate(40deg);
    background-color: #d63230;
  }
  #check:checked ~ header div label .icon::before {
    transform: rotate(90deg);
    top: 0px;
    background-color: #d63230;
  }
  #check:checked ~ header div label .icon::after {
    transform: rotate(90deg);
    bottom: 0px;
    background-color: #d63230;
  }
}
</style>
