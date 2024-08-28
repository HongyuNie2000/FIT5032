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

const mentalHealthIndex = ref(0)

const mentalHealthes = [
  {
    title: 'Dispression',
    path: '/public/image/depression.png',
    description:
      'Depression is a persistent mood disorder causing deep sadness, loss of interest, and impairing daily functioning, relationships, and overall well-being'
  },
  {
    title: 'Anxiety Disorder',
    path: '/public/image/anxietyDisorder.png',
    description:
      'Anxiety disorder is characterized by excessive worry, fear, and nervousness, disrupting daily activities, relationships, and overall mental and physical health.'
  },
  {
    title: 'Bipolar Disorder',
    path: '/public/image/bipolarDisorder.png',
    description:
      'Bipolar disorder causes extreme mood swings, including emotional highs (mania) and lows (depression), significantly impacting behavior, energy levels, and decision-making.'
  }
]

function orgButton(num) {
  organizaitonImag1['currentPic'].value = num
}

function mentButton(num) {
  mentalHealthIndex.value = num
}
</script>

<template>
  <div class="container-fluid">
    <div class="displayDiv" aria-label="introduction to organization">
      <div class="contentDiv">
        <div style="height: 400px; object-fit: cover; width: 100%; text-align: center">
          <img :src="organizaitonImag1['image'][organizaitonImag1['currentPic'].value]" style="" />
        </div>
        <div style="margin-bottom: none; height: 100px">
          <button class="contentButton" style="margin-left: 40%" @click="orgButton(0)"></button>
          <button class="contentButton" @click="orgButton(1)"></button>
          <button class="contentButton" @click="orgButton(2)"></button>
        </div>
      </div>
      <div class="contentDiv" style="text-align: center">
        <section>
          <h1 style="padding-bottom: 20px; font-size: 3vw; font-weight: bold">
            charity organization
          </h1>
          <h2 class="text-break" style="font-size: 2vw">
            Since 1988, we provide mental health support, resources, and education to create a
            stigma-free, supportive world.
          </h2>
        </section>
      </div>
    </div>

    <div aria-label="introduction to some problem">
      <p style="text-align: center; font-size: 3vw; font-weight: bold">
        The Dangers of some Mental Health Problems
      </p>
      <div class="displayDiv">
        <div class="contentDiv">
          <div style="height: 400px; object-fit: cover; width: 100%">
            <img :src="mentalHealthes[mentalHealthIndex]['path']" style="" />
          </div>
        </div>
        <div class="contentDiv" style="text-align: center">
          <section>
            <h1 style="padding-top: 50px; padding-bottom: 20px; font-size: 3vw; font-weight: bold">
              {{ mentalHealthes[mentalHealthIndex]['title'] }}
            </h1>
            <h2 style="font-size: 2vw">
              {{ mentalHealthes[mentalHealthIndex]['description'] }}
            </h2>
          </section>
        </div>
      </div>
      <div style="align-items: center; margin-bottom: none; height: 100px; padding-top: 1%">
        <button class="contentButton" style="margin-left: 50%" @click="mentButton(0)"></button>
        <button class="contentButton" @click="mentButton(1)"></button>
        <button class="contentButton" @click="mentButton(2)"></button>
      </div>
    </div>

    <div aria-label="resources">
      <p style="text-align: center; font-size: 3vw; font-weight: bold; margin-bottom: 0px">
        Some resources
      </p>
      <div class="displayDiv" style="margin-top: 0px; height: auto">
        <div class="resource" style="position: relative">
          <img src="/public/image/resource1.png" />
          <p
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              background-color: rgba(0, 0, 0, 0.1);
              padding: 10px;
              text-align: center;
              font-size: 1.5em;
            "
          >
            activity1
          </p>
        </div>
        <div class="resource" style="position: relative">
          <img src="/public/image/resource2.png" />
          <p
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              background-color: rgba(0, 0, 0, 0.1);
              padding: 10px;
              text-align: center;
              font-size: 1.5em;
            "
          >
            activity2
          </p>
        </div>
        <div class="resource" style="position: relative">
          <img src="/public/image/resource3.png" />
          <p
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              background-color: rgba(0, 0, 0, 0.1);
              padding: 10px;
              text-align: center;
              font-size: 1.5em;
            "
          >
            activity3
          </p>
        </div>
      </div>
    </div>

    <div aria-label="volunteer" class="container-fuild text-center">
      <div style="margin-top: 10px">
        <p style="text-align: center; font-size: 3vw; font-weight: bold">Voluteer</p>
      </div>
      <div class="container-fuild text-center">
        <div class="row">
          <div class="col"><img src="/public/image/volunteer.png" /></div>
          <div class="col">
            <p style="font-size: 2vw">
              Join us in making a difference! Volunteer with our organization dedicated to
              supporting individuals with mental health challenges. Your time and compassion can
              provide vital assistance, offering hope and healing to those in need. Together, we can
              create a brighter future for everyone. Make an impact—volunteer today!
            </p>
            <button type="button" class="btn btn-primary btn-lg">Join us</button>
          </div>
        </div>
      </div>
    </div>

    <div style="margin: 32px auto; max-width: 1120px; width: 100%">
      <div aria-label="donate" class="donate">
        <div class="donate-items text-center">
          <div class="donate-image">
            <img src="/public/image/donate1.png" style="object-fit: contain" />
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary btn-lg">Donate $10</button>
          </div>
        </div>

        <div class="donate-items text-center">
          <div class="donate-image">
            <img src="/public/image/donate2.png" style="object-fit: contain" />
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary btn-lg">Donate $20</button>
          </div>
        </div>
        <div class="donate-items text-center">
          <div class="donate-image">
            <img src="/public/image/donate3.png" style="object-fit: contain" />
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary btn-lg">Donate $50</button>
          </div>
        </div>
        <div class="donate-items text-center">
          <div class="donate-image">
            <img src="/public/image/donate4.png" style="object-fit: contain" />
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary btn-lg">Donate $100</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donate-text {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 24px;
  text-align: center;
}
@media (min-width: 600px) {
  .donate-text {
    gap: 40px;
    height: 100%;
  }
}
.donate-image {
  display: flex;
  height: 188px;
  min-height: 188px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.donate {
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
@media (min-width: 1200px) {
  .donate {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
}
@media (min-width: 600px) {
  .donate {
    grid-row-gap: 40px;
  }
}
@media (min-width: 600px) and (max-width: 1199.95px) {
  .donate {
    grid-template-columns: auto auto;
  }
}

.donate-items {
  border: 1px solid #c9d6de;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}

.displayDiv {
  flex-wrap: wrap;
  position: relative;
  top: 10px;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
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

.resource {
  height: 200px;
  width: 200px;
}
</style>
