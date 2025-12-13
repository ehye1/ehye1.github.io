"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-7 font-noto">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-90 h-130 bg-white rounded-[30px] border border-lightgray py-6 px-8">
          <Image
            src="/images/profile.jpg"
            alt="Profile image"
            width={121}
            height={143}
            className="border border-lightgray"
          />
          <div className="text-black font-medium text-[20px] pt-2">이혜원</div>
          {/* 학력 */}
          <div className="text-gray font-medium text-[17px] pt-1">
            숙명여자대학교 IT공학부 재학중
          </div>
          <div className="text-lightgray text-[17px] pl-5">
            <li className="text-[16px]">2022.03~</li>
            <li className="text-[16px]">학점 4 / 4.3</li>
          </div>
          <div className="text-gray font-medium text-[17px] pt-2">
            Windesheim University of Applied Sciences 네덜란드 교환
          </div>
          <div className="text-lightgray text-[17px] pl-5">
            <li className="text-[16px]">2024.09~2025.01</li>
          </div>

          {/* 개인정보 */}
          <div className="text-navy font-[450] text-[17px] pt-2">
            <div className="flex gap-2">
              <Image src="/images/phone.svg" alt="Phone icon" width={21} height={21} />
              <p>010-2769-0890</p>
            </div>
            <div className="flex gap-2">
              <Image src="/images/mail.svg" alt="Mail icon" width={21} height={21} />
              <p>hyewon2003@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <Image src="/images/clip.svg" alt="Clip icon" width={21} height={21} />
              <p>github.com/ehye1</p>
            </div>
          </div>
          <div className="flex justify-center items-center w-24 h-10 bg-lemon text-gray font-medium rounded-[30px] border border-lightgray mt-3">
            OPIc IH
          </div>
        </div>

        {/* project */}
        <div className="w-150 h-130 bg-white border border-lightgray py-5 px-8">
          <div className="font-sunshiney text-gray text-[30px] pb-3">Project •••</div>
          <div className="flex flex-col">
            <div className="flex gap-2.5">
              {/* project1 */}
              <Link href="/project1" className="relative w-[260px] h-[180px] text-[17px]">
                <Image src="/images/project1.svg" alt="project1" fill />
                <div className="absolute top-4 left-5 text-gray font-semibold">Skills Passport</div>
                <div className="absolute top-14 left-7 text-black font-medium">
                  역량 관리 플랫폼
                </div>
                <div className="absolute top-20 left-7 text-lightgray font-medium">
                  2024.09 ~ 2025.01
                </div>
                <div className="absolute top-30 left-7 w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center">
                  UX/UI
                </div>
              </Link>

              {/* project2 */}
              <Link href="/project2" className="relative w-[260px] h-[180px] text-[17px]">
                <Image src="/images/project2.svg" alt="project2" fill />
                <div className="absolute top-4 left-14 text-gray font-semibold">XPact</div>
                <div className="absolute top-14 left-7 text-black font-medium">
                  경험 정리 플랫폼
                </div>
                <div className="absolute top-20 left-7 text-lightgray font-medium">
                  2025.03 ~ 2025.07
                </div>
                <div className="absolute top-30 left-7 w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center">
                  Frontend
                </div>
              </Link>
            </div>

            {/* project3 */}
            <Link href="/project3" className="relative w-[260px] h-[260px] text-[17px]">
              <Image src="/images/project3.svg" alt="project3" fill />
              <div className="absolute top-7 left-11 text-gray font-semibold">MONDAY</div>
              <div className="absolute top-16 left-7 text-black font-medium">
                중학생을 위한 AI기반 <br />
                경제 뉴스 학습 플랫폼
              </div>
              <div className="absolute top-29 left-7 text-lightgray font-medium">
                2025.03 ~ 2025.10
              </div>
              <div className="absolute top-39 left-7 w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center">
                UX/UI
              </div>
              <div className="absolute top-39 left-32 w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center">
                Frontend
              </div>
              <div className="absolute top-48 left-7 w-24 h-7 bg-[#F2F2F7] rounded-[30px] border border-gray text-gray text-[16px] font-medium text-center">
                Backend
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
