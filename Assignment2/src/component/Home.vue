<script setup>
import { ref } from 'vue'

const organizaitonImag1 = {
  image: [
    '/public/image/organization1.png',
    '/public/image/organization2.png',
    '/public/image/organization3.png'
  ],
  currentPic: ref(0)
}

function hoverButton(num) {
  organizaitonImag1['currentPic'].value = num
}
</script>

<template>
  <div>
    <div class="displayDiv">
      <div class="contentDiv">
        <div style="height: 400px; object-fit: cover; width: 100%">
          <img :src="organizaitonImag1['image'][organizaitonImag1['currentPic'].value]" style="" />
        </div>
        <div style="align-items: center; margin-bottom: none; height: 100px">
          <button class="contentButton" style="margin-left: 40%" @click="hoverButton(0)"></button>
          <button class="contentButton" @click="hoverButton(1)"></button>
          <button class="contentButton" @click="hoverButton(2)"></button>
        </div>
      </div>
      <div class="contentDiv">
        <section>
          <h1 style="padding-top: 50px; padding-bottom: 20px">charity organization</h1>
          <h2 class="text-break" style="font-size: 30px">
            Since 1988, we provide mental health support, resources, and education to create a
            stigma-free, supportive world.
          </h2>
        </section>
      </div>
    </div>

    <div class="displayDiv">
      <div class="contentDiv">
        <div style="height: 400px; object-fit: cover; width: 100%">
          <img :src="organizaitonImag1['image'][organizaitonImag1['currentPic'].value]" style="" />
        </div>
        <div style="align-items: center; margin-bottom: none; height: 100px">
          <button class="contentButton" style="margin-left: 40%" @click="hoverButton(0)"></button>
          <button class="contentButton" @click="hoverButton(1)"></button>
          <button class="contentButton" @click="hoverButton(2)"></button>
        </div>
      </div>
      <div class="contentDiv">
        <section>
          <h1 style="padding-top: 50px; padding-bottom: 20px">charity organization</h1>
          <h2 style="font-size: 16px">
            At charity organization, we are dedicated to helping individuals overcome mental health
            challenges. Since 1988, we have provided accessible support, resources, and education to
            those in need, believing everyone deserves a life free from mental health stigma. Our
            programs, including counseling and support groups, have positively impacted countless
            communities. We envision a world where mental health is prioritized and care is
            accessible to all. Join us in making a difference—whether through donations,
            volunteering, or spreading awareness, your support is vital. Together, we can create a
            more understanding and supportive world.
          </h2>
        </section>
      </div>
    </div>

    <div class="displayDiv">
      <div class="contentDiv">
        <div style="height: 400px; object-fit: cover; width: 100%">
          <img :src="organizaitonImag1['image'][organizaitonImag1['currentPic'].value]" style="" />
        </div>
        <div style="align-items: center; margin-bottom: none; height: 100px">
          <button class="contentButton" style="margin-left: 40%" @click="hoverButton(0)"></button>
          <button class="contentButton" @click="hoverButton(1)"></button>
          <button class="contentButton" @click="hoverButton(2)"></button>
        </div>
      </div>
      <div class="contentDiv">
        <section>
          <h1 style="padding-top: 50px; padding-bottom: 20px">charity organization</h1>
          <h2 style="font-size: 16px">
            At charity organization, we are dedicated to helping individuals overcome mental health
            challenges. Since 1988, we have provided accessible support, resources, and education to
            those in need, believing everyone deserves a life free from mental health stigma. Our
            programs, including counseling and support groups, have positively impacted countless
            communities. We envision a world where mental health is prioritized and care is
            accessible to all. Join us in making a difference—whether through donations,
            volunteering, or spreading awareness, your support is vital. Together, we can create a
            more understanding and supportive world.
          </h2>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.displayDiv {
  display: flex;
  justify-content: space-between;
  height: 500px;
}
img {
  height: 100%;
  width: 100%;
}

.contentDiv {
  width: 50%;
  height: 100%;
}

.contentButton {
  margin-left: 1%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
