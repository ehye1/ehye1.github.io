"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Project1() {
  const router = useRouter();

  return (
    <div className="flex justify-center font-noto pt-10">
      <div className="flex flex-col h-490">
        {/* 스크롤 범위 */}
        <div className="w-60 h-20 rounded-[20px] bg-lemon text-gray font-bold text-center pt-3 text-[20px]">
          Skills Passport
        </div>
        <div className="-mt-7 w-180 h-470 rounded-[20px] bg-lemon py-5 px-9">
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
          <div className="text-black font-bold text-[19px] -mt-3">역량 관리 플랫폼</div>
          <div className="text-gray font-medium text-[16px]">2024.09 ~ 2025.01</div>
          <div className="w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center mt-4">
            UX/UI
          </div>
          <div className="w-24 h-7 bg-sky rounded-[30px] text-gray text-[16px] font-medium text-center mt-2">
            Figma
          </div>
          {/* 간단설명 */}
          <div className="flex flex-col gap-1 mt-5">
            <div className="flex gap-1">
              <p className="font-semibold">소개 : </p>
              <p>
                학생들의 역량을 체계적으로 기록하고 다양한 피드백을 통해 실력 향상을 지원하는 플랫폼
              </p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">소속 : </p>
              <p>Windesheim University of Applied Sciences</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Github 링크 : </p>
              <p>github.com/Skills-Passport</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">배포 링크 : </p>
              <p>https://skills-passport.nl/en</p>
            </div>
          </div>
          {/* 기능 */}
          <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-sky">
            기능
          </div>
          <div className="pl-5 pt-1">
            <li>피드백 입력: 교수·학우·팀원에게서 피드백을 받고 관리</li>
            <li>스킬 추가: 자신이 가진 기술·역량을 직접 등록</li>
            <li>역량 시각화: 보유 역량을 파이 차트로 한눈에 확인</li>
            <li>역량 인증: 교수·팀원에게 역량 인증(증명) 요청 및 수락</li>
          </div>
          {/* 역할 */}
          <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-sky">
            역할
          </div>
          <div className="pl-5 pt-1">
            <li>학생 및 교사 환경의 UX/UI 디자인</li>
            <li>처음 사용하는 사용자와 PO를 위한 웹사이트와 Figma 매뉴얼 제작</li>
            <li>test plan 작성</li>
            <li>automatic test 구현하여 기능 안정성 지속적으로 검증</li>
          </div>
          {/* 사진 */}
          <div className="text-gray font-bold pt-6 text-[17px] pb-2">desktop</div>
          <Image
            src="/images/desktop1.svg"
            alt="project1 desktop"
            width={800}
            height={200}
            className="pb-3"
          />
          <Image src="/images/desktop2.svg" alt="project1 desktop2" width={650} height={200} />
          <div className="text-gray font-bold pt-6 text-[17px] pb-2">mobile</div>
          <Image src="/images/mobile1.svg" alt="project1 mobile" width={400} height={200} />
        </div>
      </div>
    </div>
  );
}
