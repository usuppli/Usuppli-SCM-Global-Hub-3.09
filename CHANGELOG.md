# Change Log

**Software Reference:** Usuppli-SMC v3.09 2026-02-12  
**Project:** Usuppli Supply Chain Production Manager

---

## [v3.09] - 2026-02-12
**Focus:** Customer Print Module Finalization & Production Data Seeding

### 📄 Documentation & Output
* **Customer Profile Print Engine:** Developed and integrated a specialized Portrait PDF generator for the CRM module. 
    * Captures high-density contact info, billing/shipping address trees, and tiered account status.
    * Uses a secure "Top-Down" vertical layout to ensure 100% data visibility on A4 exports.
* **Print Wizard Synchronization:** Unified all 5 core modules (Order, Sample, Shipment, Product, Customer) under a single Print Preview workflow.
* **Logic Hardening:** Resolved a critical runtime error in the Print Wizard where `PrintableProductSpec` was incorrectly referenced without an import declaration.

### 📦 Master Data & UAT Prep
* **BEMA Plus Deployment:** Successfully seeded the "BEMA Plus Support Bra" as the primary system template for UAT (User Acceptance Testing).
* **Live Production Injection:** Added the "BEMA Plus Launch Batch" (JOB-BEMA-001) to the active production queue, complete with estimated costs, factory links (Shantou Zhenshangmei), and logistics tracking.
* **Supplier Health Data:** Populated the Shantou Zhenshangmei facility with a Grade B scorecard for performance benchmarking simulations.

---

## [v3.08] - 2026-02-12
**Focus:** Print Engine Refactor (Portrait Protocol)

### 📄 Printing Protocols
* **Portrait Migration:** Deprecated Landscape mode for Product Specifications. All technical documentation now forces **Portrait (A4)** to ensure data integrity and prevent horizontal truncation.
* **Vertical Stack Re-engineering:**
    * **Hero Zone:** Image scaling optimized via `object-fit: contain`.
    * **Data Matrix:** Implemented a high-density 3-column grid for technical DNA.
    * **Financials:** Cost Breakdown tables pinned to the base of the content area.

---

## [v3.07] - 2026-02-12
**Focus:** UI/UX Overhaul, Tariff Intelligence & Role Governance

### 🎨 UI/UX & Theming
* **Dark Mode Restoration:** Re-architected the `ThemeProvider` to support a "Class-Based" toggle strategy.
* **Sidebar Redesign:** Consolidated "New Product" and "Theme Toggle" into a unified action header.
* **Visual Polishing:** Updated `CommandPalette` and `Dashboard` components with `dark:` utility classes.

### 💰 Tariff & Landed Cost Overhaul
* **Global Config Engine:** Implemented `GlobalConfigContext` to centrally manage baseline tariff rates.
* **Smart Locking:** Added a "Tariff Lock" mechanism to prevent individual Product Workspaces from overriding critical trade compliance data.

### 🔐 Roles & Governance (RBAC)
* **Menu-Level Security:** Refactored `Sidebar.tsx` to support a strict `restrictedTo` array for every navigation item.
* **Admin Hardening:** Added a `canAccessAdmin` logic gate in `App.tsx`.

---

## [3.0.1] - 2025-06-01 (Previous)
**Focus:** Governance, Security Hardening & Version Alpha

### Data Governance & Security
- **Restricted Data Export:** Implemented role-based conditional rendering for "Export CSV" functionality.
- **Session Integrity:** Standardized `userRole` retrieval from local persistence.
