import { ref } from "vue";
import { container, iconNav } from "@/utils/Patterns";
import PostsService from "@/utils/Services/Posts";
import CategoriesService from "@/utils/Services/Categories";
import CsNavBar from "@/components/NavBar/Base.vue";
import CsLogo from "@/components/Logo/Base.vue";
import CsIconNav from "@/components/IconNav/Base.vue";
import CsButton from "@/components/Button/Base.vue";

export default {
  title: "Design System/Templates/Header",
};

const Template = (args) => ({
  components: {
    CsNavBar,
    CsLogo,
    CsIconNav,
    CsButton,
  },
  setup() {
    const social = {
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "https://www.whatsapp.com/",
    };
    const items = ref([]);
    const news = ref([]);
    const categoriesService = ref(new CategoriesService());
    const postsService = ref(new PostsService());
    categoriesService.value.getAll().then((data) => (items.value = data));
    postsService.value.getAll().then((data) => (news.value = data));

    return { ...args, container, iconNav, social, items, news };
  },
  template: `
        <div class="hidden sm:block bg-neutral-50 border-b border-neutral-200">
            <div :class="['container py-1', container.maxWidth]">
                <div class="flex justify-between py-1">
                    <div class="flex items-center">
                        {{ date }}
                    </div>
                    <div class="flex items-center">
                        <cs-icon-nav :icons="social"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden md:block bg-neutral-50">
            <div :class="['container py-2', container.maxWidth]">
                <div class="flex justify-between py-6">
                    <div class="flex items-center">
                        <cs-button theme="default" class="uppercase" >
                            Acceder
                        </cs-button>
                    </div>
                    <div class="flex items-center">
                        <cs-logo height="h-12" />
                    </div>
                    <div class="flex items-center">
                        <cs-button theme="secondary" class="uppercase" >
                            Suscríbase
                        </cs-button>
                    </div>
                </div>
            </div>
        </div>
        <div :class="backgroundColor">
            <div :class="['container', container.maxWidth]">
                <cs-nav-bar :menu="items" :search="news" :searchLimit="5" />
            </div>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-secondary-400",
  date: "Tarija, jueves 16 de septiembre del 2021",
};
