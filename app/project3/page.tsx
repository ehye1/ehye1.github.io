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
    <div className="flex justify-center font-noto pt-10">
      <div className="flex flex-col h-full">
        {/* 스크롤 범위 */}
        <div className="flex flex-row">
          <div
            onClick={() => setActiveTab("overview")}
            className={`${baseStyle} ${
              activeTab === "overview" ? "bg-main" : "bg-[#D9D9D9] hover:bg-[#FFEDA5]"
            }`}
          >
            프로젝트 개요
          </div>

          <div
            onClick={() => setActiveTab("troubleshooting")}
            className={`${baseStyle} ${
              activeTab === "troubleshooting" ? "bg-main" : "bg-[#D9D9D9] hover:bg-[#FFEDA5]"
            }`}
          >
            트러블 슈팅
          </div>
        </div>
        <div className="-mt-9 w-180 rounded-[20px] bg-main py-5 px-9">
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
                MONDAY : 중학생을 위한 AI기반 경제 뉴스 학습 플랫폼
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
                    AI 기반 난이도 조절을 통해 중학생 수준에 맞게 경제 뉴스를 학습할 수 있도록
                    설계된
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
                  <Link
                    href="https://github.com/MON-DA-Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    github.com/MON-DA-Y
                  </Link>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold">배포 링크 : </p>
                  <Link
                    href="https://monday.it.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    https://monday.it.kr
                  </Link>
                </div>
              </div>
              {/* 기능 */}
              <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-sub">
                기능
              </div>
              <div className="pl-5 pt-1">
                <li>
                  <strong>MON 단어</strong>: 경제 뉴스 핵심 단어를 설명과 예시로 쉽게 학습
                </li>
                <li>
                  <strong>MON 뉴스:</strong> AI 난이도 조절을 통해 뉴스 읽기·요약 학습 제공
                </li>
                <li>
                  <strong>MON 퀴즈:</strong> 학습한 내용을 퀴즈로 복습하며 이해도 강화
                </li>
                <li>
                  <strong>MON 시리즈:</strong> 관련 뉴스를 묶어 경제 이슈의 맥락과 흐름을 시각적으로
                  제공
                </li>
                <li>
                  <strong>히스토리 관리:</strong> 학습한 뉴스·단어 기록을 히스토리 페이지에서 한눈에
                  확인
                </li>
                <li>
                  <strong>학부모 페이지:</strong> 자녀의 학습 상황을 실시간으로 확인 가능
                </li>
              </div>
              {/* 기여한 부분 */}
              <div className="text-gray font-bold pt-6 text-[17px] underline decoration-5 underline-offset-0 decoration-sub">
                기여한 부분
              </div>
              <div className="pl-5 pt-1">
                <li>로그인·로그아웃 기능 구현</li>
                <li>학부모 페이지 및 랜딩 페이지 UX/UI 디자인</li>
                <li>
                  학부모 페이지·학생 마이페이지 프론트엔드 개발 및 MongoDB를 활용한 데이터 관리
                </li>
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
          )}
          {/* 여기까지 프로젝트 개요 */}

          {/* 여기서부터 트러블 슈팅 */}
          {activeTab === "troubleshooting" && (
            <div>
              <div className="text-black font-bold text-[19px] -mt-3">
                인증과 데이터 식별 분리로 학부모–학생 조회 구조 개선{" "}
              </div>
              <div className="text-black font-bold text-[19px] mt-4">문제</div>
              <div className="text-gray text-[16px] mt-2">
                학부모 페이지에서 학생 정보를 조회할 때, 학생 데이터 조회 기준으로 `studentId`가
                아닌 <strong>로그인 토큰 정보로 조회가 이루어져 데이터 오류가 발생</strong>했다.
                또한 학부모가 학생 페이지로 이동할 때{" "}
                <strong>URL에 `studentId`가 그대로 노출</strong>되고, 일부 API에서도 이를 URL
                파라미터로 전달하고 있어 보안상 문제가 될 수 있었다.
              </div>
              <div className="text-black font-bold text-[19px] mt-4">원인</div>
              <div className="text-gray text-[16px] mt-2">
                인증 정보(token)와 리소스 식별자(studentId)의 역할이 명확히 분리되지 않아 “누가
                요청했는지”와 “어떤 학생의 데이터를 조회하는지”가 혼재된 구조였다. 이로 인해
                학부모–학생 관계가 명확히 반영되지 못했다.
              </div>
              <div className="text-black font-bold text-[19px] mt-4">해결</div>
              <div className="text-gray text-[16px] mt-2">
                토큰은 <strong>사용자 인증 및 권한 검증 용도로만 사용</strong>하도록 역할을 분리하고
                학부모가 등록한 학생의 <strong>`studentId`를 기준으로 데이터 조회 로직 수정</strong>
                하였다. 또한 히스토리·진도·출석 API에서 `studentId`를 URL이 아닌 body로 전달하도록
                변경해 노출을 최소화하였다.
              </div>
              <div className="text-black font-bold text-[19px] mt-4">결과</div>
              <div className="text-gray text-[16px] mt-2">
                학부모–학생 관계에 맞는 데이터 조회가 안정적으로 이루어졌으며, 인증 정보와 데이터
                식별자를 분리한 <strong>보안성과 확장성을 고려한 API 설계의 중요성</strong>을 명확히
                이해하게 되었다.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
