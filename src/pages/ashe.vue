<script setup lang="ts">
import { AcademicCapIcon, BookOpenIcon, FlagIcon, HomeIcon } from '@heroicons/vue/20/solid/index.js'

const timeline = [
  {
    content: 'Adopted',
    target: 'and brought home',
    href: '#',
    date: 'Oct 18',
    datetime: '2022-10-18',
    icon: HomeIcon,
    iconBackground: 'bg-amber-500',
  },
  {
    content: 'Started',
    target: 'Puppy Class 1 ',
    href: '#',
    date: 'Oct 11',
    datetime: '2022-12-11',
    icon: FlagIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    content: 'Learned',
    target: 'all basic tricks at class',
    href: '#',
    date: 'Dec 11',
    datetime: '2022-12-11',
    icon: BookOpenIcon,
    iconBackground: 'bg-purple-500',
  },
  {
    content: 'Graduated from',
    target: 'Puppy Class 1 ',
    href: '#',
    date: 'Dec 31',
    datetime: '2022-12-0',
    icon: AcademicCapIcon,
    iconBackground: 'bg-emerald-500',
  },
  {
    content: 'Learned',
    target: 'most intermediate tricks',
    href: '#',
    date: 'Feb 20',
    datetime: '2023-02-20',
    icon: BookOpenIcon,
    iconBackground: 'bg-purple-500',
  },
  {
    content: 'Graduated from',
    target: 'Puppy Class 2',
    href: '#',
    date: 'Feb 28',
    datetime: '2023-02-28',
    icon: AcademicCapIcon,
    iconBackground: 'bg-emerald-500',
  },
]

const stats = [{
  name: 'Height',
  value: '21 in'
}, {
  name: 'Weight',
  value: '42 lbs'
}, {
  name: 'Breed',
  value: 'Poodle'
}]

const images = [
  {
    src: "/images/molly_and_ashe_little.jpeg",
    alt: "Molly and Ashe as a pup",
  },
  {
    src: "/images/me_and_ashe.jpeg",
    alt: 'Me and Ashe',
  },
  {
    src: "/images/all_of_us.jpeg",
    alt: 'All of us',
  },
  {
    src: "/images/ashe_graduation.jpeg",
    alt: "Ashe's Graduation",
  },
]
</script>

<template>
  <div class="mt-5 md:mt-8">
    <div class="flex flex-row w-full items-center">
      <img src="/images/ashe_profile.jpeg" alt="Ashe" class="inline-block h-36 w-36 sm:w-44 sm:h-44 md:h-52 md:w-52 rounded-full" />
      <div class="w-full h-full text-center sm:text-right p-0 sm:pr-8 md:pr-12">
        <h1 class="text-6xl w-full">Ashe</h1>
        <span class="hidden lg:block text-white text-sm mr-1 mt-1">Our little PupPup</span>
      </div>
    </div>

    <Divider class="mt-8 mb-8" />

    <div class="pt-10 m-auto max-w-5xl">
      <AsheFeed :timeline="timeline" />
    </div>

    <Divider class="mb-12 -mt-5 max-w-3xl m-auto" />

    <div class="m-auto max-w-4xl">
      <AsheStats :stats="stats" />
    </div>

    <Divider class="mb-12 -mt-5 max-w-3xl m-auto" />

    <AshePhotos :images="images" />
  </div>
</template>

