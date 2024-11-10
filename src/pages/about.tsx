import header from "~/assets/header.png";
import teamPhoto from "~/assets/team-photo.png"; // 假设这是团队的整体介绍照片
import sakuragi from "~/assets/樱木花道.png"; // 樱木花道的头像图片
import ryukawafuji from "~/assets/流川枫.png"; // 流川枫的头像图片
import miyagi from "~/assets/宫城良田.png"; // 宫城良田的头像图片
import akagi from "~/assets/赤木刚宪.png"; // 赤木刚宪的头像图片
import kimura from "~/assets/木暮公延.png"; // 木暮公延的头像图片
import ansei from "~/assets/安西教练.png"; // 安西教练的头像图片
import miura from "~/assets/三井寿.png"; // 三井寿的头像图片

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "樱木花道",
      role: "大前锋",
      image: sakuragi,
      description: "湘北高中篮球队的主力大前锋，性格直率，篮球天赋极高。",
    },
    {
      id: 2,
      name: "流川枫",
      role: "小前锋",
      image: ryukawafuji,
      description: "湘北高中篮球队的主力小前锋，技术全面，被誉为天才球员。",
    },
    {
      id: 3,
      name: "宫城良田",
      role: "控球后卫",
      image: miyagi,
      description: "湘北高中篮球队的主力控球后卫，速度快，传球精准。",
    },
    {
      id: 4,
      name: "赤木刚宪",
      role: "中锋",
      image: akagi,
      description: "湘北高中篮球队的队长，实力强劲，防守出色。",
    },
    {
      id: 5,
      name: "木暮公延",
      role: "得分后卫",
      image: kimura,
      description: "湘北高中篮球队的替补得分后卫，经验丰富，投篮准确。",
    },
    {
      id: 6,
      name: "安西教练",
      role: "主教练",
      image: ansei,
      description: "湘北高中篮球队的主教练，经验丰富，战术高超。",
    },
    {
      id: 7,
      name: "三井寿",
      role: "得分后卫",
      image: miura,
      description: "湘北高中篮球队的主力得分后卫，曾经的天才球员，重返赛场后表现优异。",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">湘北篮球队介绍</h1>
      
      {/* 团队整体介绍照片 */}
      <div className="mb-8">
        <img
          src={teamPhoto}
          alt="团队照片"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-center mt-2">湘北篮球队合影</p>
      </div>

      {/* 团队成员列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="team-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="member-image w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="member-role text-gray-600 text-center my-2">
              {member.role}
            </p>
            <p className="description text-gray-500 text-sm text-center">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;