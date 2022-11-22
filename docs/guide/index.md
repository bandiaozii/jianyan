---
layout: page
title: 书籍
description: The development of Vite is guided by an international team.
---
<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamPageSection,VPTeamMembers} from 'vitepress/theme';

import { core, emeriti } from '../.vitepress/theme/configs/team';

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>一套懂你的电子书</template>
    <template #lead>
      先阅读，记考点，默考点，后练习。
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers :members="core" />


</VPTeamPage>
