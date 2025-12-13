"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Project1() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-linear-to-b from-white to-lemon">
      <div className="flex justify-center font-noto pt-10">
        <div className="flex flex-col h-1105">
          {/* 스크롤 범위 */}
          <div className="w-60 h-20 rounded-[20px] bg-sky text-gray font-bold text-center pt-3 text-[20px]">
            XPact
          </div>
          <div className="-mt-7 w-180 h-1085 rounded-[20px] bg-sky py-5 px-9">
            {/* 카드 범위 */}
            <div onClick={() => router.push("/")} className="cursor-pointer w-fit">
              <Image
                src="/images/closeIcon.svg"
                alt="closeIcon"
                width={15}
                height={15}
                className="ml-155 pt-2"
              />
            </div>
            <div className="text-black font-bold text-[19px] -mt-3">경험 정리 플랫폼</div>
            <div className="text-gray font-medium text-[16px]">2025.03 ~ 2025.07</div>
            <div className="w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center mt-4">
              Frontend
            </div>
            <div className="flex gap-2 text-gray text-[16px] font-medium text-center mt-2">
              <div className="w-24 h-7 bg-lemon rounded-[30px] ">Figma</div>
              <div className="w-24 h-7 bg-lemon rounded-[30px]">Next.js</div>
              <div className="w-24 h-7 bg-lemon rounded-[30px]">React</div>
              <div className="w-24 h-7 bg-lemon rounded-[30px]">Netlify</div>
            </div>
            {/* 간단설명 */}
            <div className="flex flex-col gap-1 mt-5">
              <div className="flex gap-1">
                <p className="font-semibold">소개 : </p>
                <p>개인의 다양한 경험을 구조화해 커리어 성장을 지원하는 플랫폼</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">소속 : </p>
                <p>연합 IT동아리 잇타</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">Github 링크 : </p>
                <p>github.com/Xpact-2025</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">배포 링크 : </p>
                <p>https://xpact.site</p>
              </div>
            </div>
            {/* 기능 */}
            <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-lemon">
              기능
            </div>
            <div className="pl-5 pt-1">
              <li>
                경험 대시보드: 작성한 경험을 기반으로 직무 비율을 분석하고 핵심 스킬맵을 통해 필요한
                역량과 부족한 역량을 시각적으로 확인
              </li>
              <li>
                경험 입력: 경험 유형에 따라 다른 입력 양식을 제공하여 활동·프로젝트·학습 경험을
                체계적으로 기록
              </li>
              <li>
                성장 가이드: 목표 직무에 필요한 역량을 분석하고 부족한 역량을 보완할 수 있는 추천
                활동 제시
              </li>
              <li>경험 메인: 누적된 경험을 한곳에서 정리하고 성장 흐름을 한눈에 파악</li>
            </div>
            {/* 역할 */}
            <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-lemon">
              역할
            </div>
            <div className="pl-5 pt-1">
              <li>경험 메인 및 입력 화면 프론트엔드 개발</li>
              <li>경험 유형에 따른 입력 화면 분기 및 성장 가이드 일부 구현</li>
              <li>사용성 개선을 위한 유저 테스트 참여 및 피드백 반영</li>
            </div>
            {/* 사진 */}
            <div className="text-gray font-bold pt-6 text-[17px] pb-2">desktop</div>
            <div className="flex flex-col gap-2">
              <Image src="/images/project2_1.svg" alt="project2" width={650} height={200} />
              <Image src="/images/project2_2.svg" alt="project2" width={650} height={200} />
              <Image src="/images/project2_3.svg" alt="project2" width={650} height={200} />
              <Image src="/images/project2_4.svg" alt="project2" width={650} height={200} />
              <Image src="/images/project2_5.svg" alt="project2" width={650} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
