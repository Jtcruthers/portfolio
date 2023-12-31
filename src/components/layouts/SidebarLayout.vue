<script setup lang="ts">
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/20/solid/index.js'

const route = useRoute()
const navigation = computed(() => [
  { name: 'Home', to: '/', current: route.path === '/'},
  { name: 'Ashe', to: '/ashe', current: route.path === '/ashe' },
])

const sidebarOpen = ref(false)
const logoName = 'JC'
</script>

<template>
  <div class="text-white bg-red-500 h-full w-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-red-400">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none" @click="sidebarOpen = false">
                    <XMarkIcon class="h-6 w-6 text-teal-300" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <span class="text-5xl text-teal-300 font-bold">{{ logoName }}</span>
                </div>
                <nav class="mt-5 space-y-1 px-2">
                  <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" @click="sidebarOpen = false">
                    <span :class="[item.current ? 'bg-red-500 text-teal-200' : 'text-gray-100 hover:bg-red-500 hover:text-white', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                      {{ item.name }}
                    </span>
                  </NuxtLink>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-52 lg:w-60 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col bg-red-400 border-r-4 border-teal-300">
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4">
            <span class="text-6xl text-teal-300 font-bold">{{ logoName }}</span>
          </div>
          <nav class="mt-5 flex-1 space-y-1 px-2">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to">
              <span :class="[item.current ? 'bg-red-600 text-red-50' : 'text-gray-100 hover:bg-red-500 hover:text-white', 'mt-1.5 group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                {{ item.name }}
              </span>
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64 h-full">
      <div class="sticky top-0 z-10 bg-red-400 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
        <button type="button" class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-300" @click="sidebarOpen = true">
          <Bars3Icon class="h-6 w-6 text-teal-300" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-5 h-full">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
