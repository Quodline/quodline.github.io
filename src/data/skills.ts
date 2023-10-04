import reactIcon from "@/assets/frontend/react.svg"
import reactNativeIcon from "@/assets/frontend/create-react-app.svg"
import typescriptIcon from "@/assets/frontend/typescript-icon.svg"
import tailwindIcon from "@/assets/frontend/tailwindcss-icon.svg"
import framerIcon from "@/assets/frontend/framer.svg"
import htmlIcon from "@/assets/frontend/html-5.svg"
import cssIcon from "@/assets/frontend/css-3.svg"
import javascriptIcon from "@/assets/frontend/javascript.svg"
import nextIcon from "@/assets/frontend/nextjs-icon.svg"
import reduxIcon from "@/assets/frontend/redux.svg"
import cypress from "@/assets/frontend/cypress-icon.svg"

import redisIcon from "@/assets/backend/redis.svg"
import openapiIcon from "@/assets/backend/openapi-icon.svg"
import laravelIcon from "@/assets/backend/laravel.svg"
import slimIcon from "@/assets/backend/slim.svg"
import phpIcon from "@/assets/backend/php.svg"
import mysqlIcon from "@/assets/backend/mysql-icon.svg"
import dockerIcon from "@/assets/backend/docker-icon.svg"
import supabaseIcon from "@/assets/backend/supabase-icon.svg"
import restIcon from "@/assets/backend/aws-api-gateway.svg"

import vercelIcon from "@/assets/deployment/vercel-icon.svg"
import cloudwaysIcon from "@/assets/deployment/cloudways.svg"
import awsIcon from "@/assets/deployment/aws.svg"
import herokuIcon from "@/assets/deployment/heroku-icon.svg"
import appStoreIcon from "@/assets/deployment/apple-app-store.svg"
import playStoreIcon from "@/assets/deployment/google-play-icon.svg"
import githubIcon from "@/assets/github-icon.svg"
import forgeIcon from "@/assets/deployment/forge.svg"

const skills: { backend: Skill[], frontend: Skill[], deployment: Skill[] } = {
    backend: [
        ['PHP', phpIcon],
        ['Laravel', laravelIcon],
        ['SlimPHP', slimIcon],
        ['MySQL', mysqlIcon],
        ['Redis', redisIcon],
        ['Supabase', supabaseIcon],
        ['Docker', dockerIcon],
        ['REST', restIcon],
        ['OpenAPI', openapiIcon],
    ],
    frontend: [
        ['HTML', htmlIcon],
        ['CSS', cssIcon],
        ['JavaScript', javascriptIcon],
        ['TypeScript', typescriptIcon],
        ['Tailwind', tailwindIcon],
        ['Framer Motion', framerIcon],
        ['React', reactIcon],
        ['NextJS', nextIcon],
        ['React Native', reactNativeIcon],
        ['Redux', reduxIcon],
        ['Cypress', cypress],
    ],
    deployment: [
        ['Vercel', vercelIcon],
        ['Cloudways', cloudwaysIcon],
        ['Laravel Forge', forgeIcon],
        ['AWS (Amazon)', awsIcon],
        ['Heroku', herokuIcon],
        ['GitHub Pages', githubIcon],
        ['Google Play', playStoreIcon],
        ['App Store', appStoreIcon],
    ]
}

export default skills