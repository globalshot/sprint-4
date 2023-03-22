<template>
    <div class="flex">
        <button class="clear-filter-btn bold" style="font-size: 16px; color: rgb(34, 35, 37);">Clear Filter</button>
        <!-- <div>
            <div class="budget-input-1 flex">
                <p @click="showForm" class="bold">Budget</p>
                <div class="drop-arrow">
                    <span>
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="red"
                                d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                            </path>
                        </svg>
                    </span>
                    <div class="dropUp"></div>
                </div>
            </div> -->
            <!-- <form v-if="show" class="budget-dropdown">
                <div class="inputs">
                    <div>
                        <p class="bold">MIN.</p><input><i>$</i>
                    </div>
                    <div>
                        <p class="bold">MAX.</p><input><i>$</i>
                    </div>
                </div>
                <div class="buttons flex">
                    <div>Clear All</div><button>Apply</button>
                </div>
            </form>
        </div> -->
        <!-- <div class="flex flex-wrap items-center">
        <el-dropdown>
          <el-button class="delivery-dropdown" type="primary">
            Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Express 24H</el-dropdown-item>
              <el-dropdown-item>Up to 3 days 2</el-dropdown-item>
              <el-dropdown-item>Up to 7 days 3</el-dropdown-item>
              <el-dropdown-item>Anytime 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div> -->
    </div>
</template>
  
<script>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref } from 'vue'
export default {
    data() {
        return {
            show: false,
            value1: ref([]),
            value2: ref([]),
            value3: ref([]),
            value4: ref([]),
            options: [
                {
                    value: 'Express 24H',
                    label: 'Express 24H',
                },
                {
                    value: 'Up to 3 days',
                    label: 'Up to 3 days',
                },
                {
                    value: 'Up to 7 days',
                    label: 'Up to 7 days',
                },
                {
                    value: 'Anytime',
                    label: 'anytime',
                },
            ]
        }
    },
    methods: {
        showForm() {
            console.log('doing it')
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
.example-showcase .el-dropdown+.el-dropdown {
    margin-left: 15px;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>