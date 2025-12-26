"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Project1() {
  const router = useRouter();

  return (
    <div className="flex justify-center font-noto pt-10">
      <div className="flex flex-col h-960">
        {/* 스크롤 범위 */}
        <div className="w-60 h-20 rounded-[20px] bg-main text-gray font-bold text-center pt-3 text-[20px]">
          MONDAY
        </div>
        <div className="-mt-7 w-180 h-940 rounded-[20px] bg-main py-5 px-9">
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
          <div className="text-black font-bold text-[19px] -mt-3">
            중학생을 위한 AI기반 경제 뉴스 학습 플랫폼
          </div>
          <div className="text-gray font-medium text-[16px]">2025.03 ~ 2025.10</div>
          <div className="flex gap-2 text-gray text-[16px] font-medium text-center mt-4">
            <div className="w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-lightgray">
              UX/UI
            </div>
            <div className="w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-lightgray">
              Frontend
            </div>
            <div className="w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-lightgray">
              Backend
            </div>
          </div>
          <div className="flex gap-2 text-gray text-[16px] font-medium text-center mt-2">
            <div className="w-24 h-7 bg-sub rounded-[30px] ">Figma</div>
            <div className="w-24 h-7 bg-sub rounded-[30px]">Next.js</div>
            <div className="w-24 h-7 bg-sub rounded-[30px]">React</div>
            <div className="w-24 h-7 bg-sub rounded-[30px]">Node.js</div>
            <div className="w-24 h-7 bg-sub rounded-[30px]">MongoDB</div>
          </div>
          {/* 간단설명 */}
          <div className="flex flex-col gap-1 mt-5">
            <div className="flex gap-1">
              <p className="font-semibold">소개 : </p>
              <p>
                AI 기반 난이도 조절을 통해 중학생 수준에 맞게 경제 뉴스를 학습할 수 있도록 설계된
                <br />
                교육 플랫폼
              </p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">소속 : </p>
              <p>숙명여자대학교 졸업프로젝트</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Github 링크 : </p>
              <p>github.com/MON-DA-Y</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">배포 링크 : </p>
              <p>https://monday.it.kr</p>
            </div>
          </div>
          {/* 기능 */}
          <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-sub">
            기능
          </div>
          <div className="pl-5 pt-1">
            <li>MON 단어: 경제 뉴스 핵심 단어를 설명과 예시로 쉽게 학습</li>
            <li>MON 뉴스: AI 난이도 조절을 통해 뉴스 읽기·요약 학습 제공</li>
            <li>MON 퀴즈: 학습한 내용을 퀴즈로 복습하며 이해도 강화</li>
            <li>MON 시리즈: 관련 뉴스를 묶어 경제 이슈의 맥락과 흐름을 시각적으로 제공</li>
            <li>히스토리 관리: 학습한 뉴스·단어 기록을 히스토리 페이지에서 한눈에 확인</li>
            <li>학부모 페이지: 자녀의 학습 상황을 실시간으로 확인 가능</li>
          </div>
          {/* 역할 */}
          <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-sub">
            역할
          </div>
          <div className="pl-5 pt-1">
            <li>로그인·로그아웃 기능 구현</li>
            <li>학부모 페이지 및 랜딩 페이지 UX/UI 디자인</li>
            <li>학부모 페이지·학생 마이페이지 프론트엔드 개발 및 MongoDB를 활용한 데이터 관리</li>
          </div>
          {/* 사진 */}
          <div className="text-gray font-bold pt-8 text-[17px]">Tablet (iPad)</div>
          <Image src="/images/project3_5.svg" alt="project3" width={650} height={200} />
          <Image
            src="/images/project3_6.svg"
            alt="project3"
            width={635}
            height={200}
            className="-mt-25 ml-4"
          />
          <Image src="/images/project3_1.svg" alt="project3" width={500} height={200} />
          <Image src="/images/project3_2.svg" alt="project3" width={500} height={200} />
          <Image src="/images/project3_3.svg" alt="project3" width={500} height={200} />
          <Image src="/images/project3_4.svg" alt="project3" width={500} height={200} />
        </div>
      </div>
    </div>
  );
}
