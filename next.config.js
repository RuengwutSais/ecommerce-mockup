/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images  :{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "i.dummyjson.com"
            },
        ],
        unoptimized:true
    }
}


module.exports = nextConfig
