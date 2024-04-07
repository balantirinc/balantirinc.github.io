export default function Offices() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our offices
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Want to visit?</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Mexico City
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>859 Av. de los Insurgentes Sur</p>
              <p>Mexico City, Mexico 03810</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Monterrey
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Blvd. Antonio L. Rodríguez 1888, Santa María</p>
              <p>Monterrey, N.L. 64650</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Guadalajara
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>5153 Blvrd Puerta de Hierro, Puerta de Hierro</p>
              <p>Zapopan, Jalisco 45116</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}
