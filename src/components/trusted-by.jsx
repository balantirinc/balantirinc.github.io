import gapLogo from './../assets/logos/gap_logo.svg'
import globantLogo from './../assets/logos/globant_logo.svg'
import kelloggsLogo from './../assets/logos/kelloggs_logo.svg'
import lendingclubLogo from './../assets/logos/lendingclub_logo.svg'
import terniumLogo from './../assets/logos/ternium_logo.svg'

export default function TrustedBy() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">
            {/* Trusted by the world’s most innovative teams */}
            {/* Our collaborators have worked for projects at */}
            {/* Our collaborators have worked on projects from */}
            Trusted by the most innovative companies
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1"
              src={kelloggsLogo}
              alt="Kellogg's"
              width={165}
              height={55}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 pt-[10px]"
              src={lendingclubLogo}
              alt="LendingClub"
              width={165}
              height={55}
            />

            <img
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1"
              src={terniumLogo}
              alt="Ternium"
              width={165}
              height={55}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1"
              src={gapLogo}
              alt="GAP"
              width={165}
              height={55}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 pt-[5px]"
              src={globantLogo}
              alt="Globant"
              width={165}
              height={55}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
