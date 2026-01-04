"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Project1() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "troubleshooting">("overview");
  const baseStyle =
    "w-50 h-22 rounded-[20px] pt-3 text-gray font-bold text-center text-[19px] cursor-pointer transition-colors";

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-linear-to-b from-white to-main">
      <div className="flex justify-center font-noto pt-10">
        <div className="flex flex-col h-full">
          {/* 스크롤 범위 */}
          <div className="flex flex-row">
            <div
              onClick={() => setActiveTab("overview")}
              className={`${baseStyle} ${
                activeTab === "overview" ? "bg-sub" : "bg-[#D9D9D9] hover:bg-[#ABE5FF]"
              }`}
            >
              프로젝트 개요
            </div>

            <div
              onClick={() => setActiveTab("troubleshooting")}
              className={`${baseStyle} ${
                activeTab === "troubleshooting" ? "bg-sub" : "bg-[#D9D9D9] hover:bg-[#ABE5FF]"
              }`}
            >
              트러블 슈팅
            </div>
          </div>
          <div className="-mt-9 w-180 rounded-[20px] bg-sub py-5 px-9">
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
            {/* 여기서부터 프로젝트 개요 */}
            {activeTab === "overview" && (
              <div>
                <div className="text-black font-bold text-[19px] -mt-3">
                  XPact : 경험 정리 플랫폼
                </div>
                <div className="text-gray font-medium text-[16px]">2025.03 ~ 2025.07</div>
                <div className="w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-lightgray text-gray text-[16px] font-medium text-center mt-4">
                  Frontend
                </div>
                <div className="flex gap-2 text-gray text-[16px] font-medium text-center mt-2">
                  <div className="w-24 h-7 bg-main rounded-[30px] ">Figma</div>
                  <div className="w-24 h-7 bg-main rounded-[30px]">Next.js</div>
                  <div className="w-24 h-7 bg-main rounded-[30px]">React</div>
                  <div className="w-24 h-7 bg-main rounded-[30px]">Netlify</div>
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
                    <Link
                      href="https://github.com/Xpact-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      github.com/Xpact-2025
                    </Link>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">배포 링크 : </p>
                    <Link
                      href="https://xpact.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      https://xpact.site
                    </Link>
                  </div>
                </div>
                {/* 기능 */}
                <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-main">
                  기능
                </div>
                <div className="pl-5 pt-1">
                  <li>
                    <strong>경험 대시보드:</strong> 작성한 경험을 기반으로 직무 비율을 분석하고 핵심
                    스킬맵을 통해 필요한 역량과 부족한 역량을 시각적으로 확인
                  </li>
                  <li>
                    <strong>경험 입력:</strong> 경험 유형에 따라 다른 입력 양식을 제공하여
                    활동·프로젝트·학습 경험을 체계적으로 기록
                  </li>
                  <li>
                    <strong>성장 가이드:</strong> 목표 직무에 필요한 역량을 분석하고 부족한 역량을
                    보완할 수 있는 추천 활동 제시
                  </li>
                  <li>
                    <strong>경험 메인:</strong> 누적된 경험을 한곳에서 정리하고 성장 흐름을 한눈에
                    파악
                  </li>
                </div>
                {/* 기여한 부분 */}
                <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-main">
                  기여한 부분
                </div>
                <div className="pl-5 pt-1">
                  <li>경험 메인 및 입력 화면 프론트엔드 개발</li>
                  <li>경험 유형에 따른 입력 화면 분기 및 성장 가이드 일부 구현</li>
                  <li>사용성 개선을 위한 유저 테스트 참여 및 피드백 반영</li>
                </div>
                {/* 사진 */}
                <div className="text-gray font-bold pt-8 text-[17px] pb-2">desktop</div>
                <div className="flex flex-col gap-2">
                  <Image src="/images/project2_1.svg" alt="project2" width={650} height={200} />
                  <Image src="/images/project2_2.svg" alt="project2" width={650} height={200} />
                  <Image src="/images/project2_3.svg" alt="project2" width={650} height={200} />
                  <Image src="/images/project2_4.svg" alt="project2" width={650} height={200} />
                  <Image src="/images/project2_5.svg" alt="project2" width={650} height={200} />
                </div>
              </div>
            )}
            {/* 여기까지 프로젝트 개요 */}

            {/* 여기서부터 트러블 슈팅 */}
            {activeTab === "troubleshooting" && (
              <div>
                <div className="text-black font-bold text-[19px] -mt-3">
                  Payload 중복 정의로 인한 subExperience 데이터 누락 해결
                </div>
                <div className="text-black font-bold text-[19px] mt-4">문제</div>
                <div className="text-gray text-[16px] mt-2">
                  경험 작성 폼에서 여러 개의 세부 경험을 입력해 저장했지만, UI와 달리{" "}
                  <strong>
                    서버로 전송되는 payload의 subExperiences 배열이 빈 값으로 전달되는 문제
                  </strong>
                  가 발생하였다.
                </div>
                <div className="text-black font-bold text-[19px] mt-4">원인</div>
                <div className="text-gray text-[16px] mt-2">
                  원인: <strong>payload 구성 과정에서의 데이터 overwrite</strong>
                  <br />
                  저장 시점에는 사용자가 입력한 데이터를 기반으로 subExperiences 배열을 새로
                  생성하고 있었지만, 이후 payload를 조합하는 단계에서 subExperiences :
                  form.subExperiences || [] 와 같은 코드로 초기 상태가 다시 할당되고 있었다. 이로
                  인해 최종적으로 서버에 전달되는 payload에는 사용자가 입력한 값이 아닌 빈 배열이
                  포함되고 있었다.
                </div>
                <div className="text-black font-bold text-[19px] mt-4">해결</div>
                <div className="text-gray text-[16px] mt-2">
                  서버로 전송되는 payload는 항상{" "}
                  <strong>현재 UI 상태에서 직접 생성한 데이터만 사용하도록</strong> 구조를 수정하고,
                  중복된 덮어쓰기 로직을 제거해 데이터 흐름을 단일화했다.
                </div>
                <div className="text-black font-bold text-[19px] mt-4">결과</div>
                <div className="text-gray text-[16px] mt-2">
                  입력한 세부 경험 데이터가 정상적으로 저장되었다. payload 구조를 이해하고 생성
                  지점을 단일화하는 것의 중요성을 알게되었다.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
